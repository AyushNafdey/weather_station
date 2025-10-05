import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Card from './components/Card'
import temperature from '../src/assets/temp_1.png'
import humidity from '../src/assets/humidity.png'
import co2_ppm from '../src/assets/co2_ppm.png'
import air_quality_img from '../src/assets/air.png'
import pressure from '../src/assets/pressure.png'
import sea_level_pressure from '../src/assets/sea_level_pressure_new.png'
import altitude from '../src/assets/altitude.png'

import firebase from './firebase.js'
import { getDatabase, ref, get, child, onValue } from 'firebase/database'

const db = getDatabase(firebase);


function App() {
  console.log("Firebase initialised: ", firebase);

  const [sensorData, setSensorData] = useState({
    Temperature_celsius: 25,
    Temperature_fahrenheit: 77,
    Humidity: 70,
    Air_quality: 450,
    CO2_PPM: 450,
    Pressure: 101325,
    Pressure_sea_level: 101325,
    Altitude: 264
  });

  useEffect(() => {
    onValue(ref(db, "Sensor_data"), (snapshot) => setSensorData(snapshot.val()))
  }, [])

  return (
    <div className='bg-blue-300 min-h-screen flex flex-col items-center justify-center p-4'>
      <h1 className="text-center text-4xl sm:text-5xl font-bold text-white mb-8 drop-shadow-lg">Weather Station</h1>
      <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-6 sm:p-10 shadow-2xl">

        <Hero value={(sensorData.Temperature_celsius ?? 25) + "°C"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Temperature" img={temperature} value={(sensorData.Temperature_celsius ?? 25) + "°C" + ", " + (sensorData.Temperature_fahrenheit ?? 77) + "°F"} />
          <Card title="Humidity" img={humidity} value={(sensorData.Humidity ?? 70) + "%"} />
          <Card title="Air Quality" img={air_quality_img} value={(sensorData.Air_quality ?? 450) + " PPM"} />
          <Card title="CO2 PPM" img={co2_ppm} value={(sensorData.Air_quality ?? 450) + " PPM"} />
          <Card title="Pressure" img={pressure} value={(sensorData.Pressure ?? 101325) + " Pa"} />
          <Card title="Sea Level Pressure" img={sea_level_pressure} value={(sensorData.Pressure_sea_level ?? 101325) + " Pa"} />
          <Card title="Altitude" img={altitude} value={(sensorData.Altitude ?? 264) + " mts"} />
        </div>
        
      </div>
    </div>
  )
}

export default App
