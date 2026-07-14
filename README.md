# 🌤️ Smart Weather Station

A smart weather station that uses an **ESP32** microcontroller to monitor temperature, humidity, and air quality (CO2) and display the data on a **live web dashboard**.

**Live Demo:** [https://live-weather-station.vercel.app/](https://live-weather-station.vercel.app/)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Hardware Requirements](#hardware-requirements)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- 🌡️ **Real-time Temperature Monitoring** - Accurate temperature readings
- 💧 **Humidity Tracking** - Monitor moisture levels in your environment
- 💨 **CO2 Air Quality Monitoring** - Track indoor air quality
- 📊 **Live Web Dashboard** - Beautiful, responsive interface to view sensor data
- 📱 **Mobile Responsive** - Access your weather data on any device
- 🔄 **Real-time Updates** - Live data streaming to the dashboard
- 📈 **Data Visualization** - Historical data charts and trends
- ⚡ **Low Power Consumption** - Efficient ESP32-based implementation

---

## 🛠️ Tech Stack

### Hardware
- **ESP32** - Microcontroller for sensor data collection
- **Temperature Sensor** - For temperature readings
- **Humidity Sensor** - For humidity monitoring
- **CO2 Sensor** - For air quality tracking

### Software
- **Frontend** (63.2%)
  - JavaScript
  - HTML
  - CSS
  - React/Vue/Vanilla JS framework
  
- **Backend/Firmware** (32.3%)
  - C++ (Arduino IDE for ESP32)
  - RESTful API
  
- **Deployment**
  - Vercel (Frontend hosting)
  - Cloud backend for data storage

---

## 🔧 Hardware Requirements

To build this weather station, you'll need:

- 1x **ESP32 Development Board** (e.g., ESP32-DevKitC)
- 1x **DHT22** or **DHT11** sensor (Temperature & Humidity)
- 1x **MQ-135** or **SCD30** sensor (CO2/Air Quality)
- Jumper wires
- Micro USB cable for programming and power
- Optional: Enclosure or 3D printed housing

### Wiring Diagram
```
ESP32 Pin | Component Pin
-----------|--------------
GPIO 4    | DHT Data Pin
GPIO 5    | MQ-135 Analog Out
5V        | VCC (Sensors)
GND       | GND (Sensors)
```

---

## 📁 Project Structure

```
weather_station/
├── firmware/              # ESP32 C++ Code
│   ├── weather_station.ino    # Main firmware
│   ├── sensor_config.h        # Sensor configuration
│   └── wifi_config.h          # WiFi settings
├── frontend/              # Web Dashboard
│   ├── index.html         # Main HTML
│   ├── styles.css         # Styling
│   ├── app.js             # Main JavaScript
│   └── assets/            # Images and icons
├── backend/               # Optional backend API
│   └── (if applicable)
├── docs/                  # Documentation
│   └── setup_guide.md     # Detailed setup instructions
├── .gitignore
└── README.md              # This file
```

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/AyushNafdey/weather_station.git
cd weather_station
```

### 2. Set Up ESP32 Firmware

#### Prerequisites
- Install [Arduino IDE](https://www.arduino.cc/en/software)
- Add ESP32 board to Arduino IDE:
  - Go to File → Preferences
  - Add this URL to Additional Board Manager URLs: `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
  - Install the ESP32 board package

#### Upload Firmware
1. Open `firmware/weather_station.ino` in Arduino IDE
2. Select Board: `ESP32 Dev Module`
3. Configure COM port and upload speed
4. Click **Upload** to flash the firmware

### 3. Set Up Frontend

```bash
cd frontend
npm install          # Install dependencies (if applicable)
npm run dev          # Start development server
# or open index.html directly in a browser
```

---

## ⚙️ Configuration

### WiFi Configuration

Edit `firmware/wifi_config.h`:

```cpp
#define SSID "Your_WiFi_SSID"
#define PASSWORD "Your_WiFi_Password"
#define API_ENDPOINT "https://your-api.com/data"
```

### Sensor Calibration

Adjust sensor pins and calibration values in `firmware/sensor_config.h`:

```cpp
#define DHT_PIN 4
#define MQ135_PIN 5
#define CALIBRATION_OFFSET 0
```

### Dashboard Configuration

Update API endpoint in `frontend/app.js`:

```javascript
const API_URL = "https://your-api.com/api/sensor";
```

---

## 🚀 Usage

1. **Power on the ESP32** - Connect via USB or battery
2. **Access the Dashboard** - Open https://live-weather-station.vercel.app/
3. **Monitor Data** - View real-time temperature, humidity, and CO2 levels
4. **Track Trends** - Use the dashboard to see historical data and patterns

---

## 📡 API Endpoints

### Get Current Sensor Data
```
GET /api/sensor/current
Response: { temperature, humidity, co2, timestamp }
```

### Get Historical Data
```
GET /api/sensor/history?days=7
Response: Array of sensor readings
```

### Post Sensor Data
```
POST /api/sensor/data
Body: { temperature, humidity, co2 }
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is currently unlicensed. Feel free to use it for personal or educational purposes.

---

## 🔗 Links

- **Live Dashboard:** [https://live-weather-station.vercel.app/](https://live-weather-station.vercel.app/)
- **GitHub Repository:** [https://github.com/AyushNafdey/weather_station](https://github.com/AyushNafdey/weather_station)
- **Issues & Bug Reports:** [GitHub Issues](https://github.com/AyushNafdey/weather_station/issues)

---

## 💡 Tips & Troubleshooting

- **ESP32 not connecting to WiFi?** - Check SSID/password in `wifi_config.h`
- **Sensor readings are inaccurate?** - Ensure proper calibration and stable power supply
- **Dashboard not updating?** - Verify API endpoint and network connectivity
- **Need help?** - Check existing issues or create a new one on GitHub

---

## 🌟 Future Enhancements

- [ ] Mobile app (React Native/Flutter)
- [ ] Email/SMS alerts for critical values
- [ ] Historical data export (CSV/JSON)
- [ ] Multiple weather station support
- [ ] Integration with weather APIs
- [ ] Dark mode for dashboard
- [ ] Database for long-term data storage

---
