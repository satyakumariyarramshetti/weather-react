import React, { useEffect, useState } from 'react'
import { useDate } from '../Utils/useDate'
import sun from '/home/rguktongole/Desktop/react/weather/src/assets/icons/sun.png'
import cloud from '/home/rguktongole/Desktop/react/weather/src/assets/icons/cloud.png'
import fog from '/home/rguktongole/Desktop/react/weather/src/assets/icons/fog.png'
import rain from '/home/rguktongole/Desktop/react/weather/src/assets/icons/rain.png'
import snow from '/home/rguktongole/Desktop/react/weather/src/assets/icons/snow.png'
import storm from '/home/rguktongole/Desktop/react/weather/src/assets/icons/storm.png'
import wind from '/home/rguktongole/Desktop/react/weather/src/assets/icons/windy.png'
import '../index.css'

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {

  const [icon, setIcon] = useState(sun)
  const { time } = useDate()

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain)
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog)
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      }
    }
  }, [iconString])

  return (
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>
      <div className='flex w-full justify-center items-center gap-4 mt-12 mb-4'>
        <img src={icon} alt="weather_icon" />
        <p className='font-bold text-5xl flex justify-center items-center'>{temperature} &deg;C</p>
      </div>
      <div className='font-bold text-center text-xl'>
        {place}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
        <p className='flex-1 text-center p-2'>{time}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-yellow-900 shadow rounded-lg'>
          Wind Speed <span className='font-normal'>{windspeed} km/h</span>
        </p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-yellow-600'>
          Humidity <span className='font-normal'>{humidity} gm/m&#179;</span>
        </p>
      </div>
      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg'>Heat Index</p>
        <p className='text-lg'>{heatIndex ? heatIndex : 'N/A'}</p>
      </div>
      <hr className='bg-slate-600' />
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
        {conditions}
      </div>
    </div>
  )
}

export default WeatherCard
