/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import sun from '/home/rguktongole/Desktop/react/weather/src/assets/icons/sun.png'
import cloud from '/home/rguktongole/Desktop/react/weather/src/assets/icons/cloud.png'
import fog from '/home/rguktongole/Desktop/react/weather/src/assets/icons/fog.png'
import rain from '/home/rguktongole/Desktop/react/weather/src/assets/icons/rain.png'
import snow from '/home/rguktongole/Desktop/react/weather/src/assets/icons/snow.png'
import storm from '/home/rguktongole/Desktop/react/weather/src/assets/icons/storm.png'
import wind from '/home/rguktongole/Desktop/react/weather/src/assets/icons/windy.png'

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState()

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
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>
      <p className='text-center'>
        {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
      </p>
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt="forecast not available" className='w-[4rem] h-[4rem]' />
      </div>
      <p className='text-center font-bold'>{temp}&deg;C</p>
    </div>
  )
}

export default MiniCard
