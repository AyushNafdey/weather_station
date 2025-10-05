#include <ArduinoJson.h>
#include <DHT.h>
#include <Adafruit_BMP085.h>
#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"
#include "secrets.h"
using namespace std;

#define mq135 33
#define dht11 27
#define VCC 5.0
#define RL 10000.0
#define ADC_MAX 4095

const char *ssid = WIFI_SSID;
const char *password = WIFI_PASSWORD;

DHT dht(dht11, DHT11);
Adafruit_BMP085 bmp180;

FirebaseData fdb;
FirebaseJson json;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
bool signup = false;

class sensorReadings {
public:
  float temp_cel, temp_fah, humidity, co2_ppm, pressure, altitude, pressure_sea_level, Rs, Ro, sum;
  int adc;

public:
  //function declarations
  sensorReadings();
  void readSensorData();
};

sensorReadings::sensorReadings() {
  temp_cel = temp_fah = humidity = co2_ppm = pressure = altitude = pressure_sea_level = Rs = Ro = sum = 0.0;
}

void sensorReadings :: readSensorData(){
  temp_cel = dht.readTemperature();
  temp_fah = dht.readTemperature(true);
  humidity = dht.readHumidity();
  pressure = bmp180.readPressure();
  altitude = bmp180.readAltitude();
  pressure_sea_level = bmp180.readSealevelPressure();
  co2_ppm = analogRead(mq135) + 200;

  if (isnan(temp_cel)) temp_cel = 0;
  if (isnan(temp_fah)) temp_fah = 0;
  if (isnan(humidity)) humidity = 0;
  if (isnan(co2_ppm)) co2_ppm = 0;
  if (isnan(pressure)) pressure = 0;
  if (isnan(altitude)) altitude = 0;
  if (isnan(pressure_sea_level)) pressure_sea_level = 0;
}

sensorReadings sensor_read;

void setup() {
  Serial.begin(115200);
  dht.begin();
  if (!bmp180.begin()) {
    Serial.println("Could not find BMP180 sensor!");
  }

  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nWiFi connected.");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  sensor_read.readSensorData();

  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("Signup OK!!");
    signup = true;
  } else {
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  config.token_status_callback = tokenStatusCallback;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop() {
  sensor_read.readSensorData();
  if (Firebase.ready() && signup && (millis() - sendDataPrevMillis > 5000 || sendDataPrevMillis == 0)) {
    sendDataPrevMillis = millis();
    json.set("/Temperature_celsius", sensor_read.temp_cel);
    json.set("/Temperature_fahrenheit", sensor_read.temp_fah);
    json.set("/Humidity", sensor_read.humidity);
    json.set("CO2_PPM", sensor_read.co2_ppm);
    json.set("/Pressure", sensor_read.pressure);
    json.set("/Altitude", sensor_read.altitude);
    json.set("/Pressure_sea_level", sensor_read.pressure_sea_level);
    Firebase.RTDB.updateNode(&fdb, "/Sensor_data", &json);
  }
}
