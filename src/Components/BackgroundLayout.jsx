import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
//images
import Clear from '/home/rguktongole/Desktop/react/weather/src/assets/images/1395.gif_wh300.gif'
import Fog from '/home/rguktongole/Desktop/react/weather/src/assets/images/foggy-fog.gif'
import Cloudy from '/home/rguktongole/Desktop/react/weather/src/assets/images/blue-fly.gif'
//import Rainy from '/home/rguktongole/Desktop/react/weather/src/assets/images/Rainy.jpg'
import Rainy from '/home/rguktongole/Desktop/react/weather/src/assets/images/Rainy Banner Gif.gif'

import Snow from '/home/rguktongole/Desktop/react/weather/src/assets/images/winter-snow.gif'
import Stormy from '/home/rguktongole/Desktop/react/weather/src/assets/images/lightning-lightning-bolt.gif'
import Sunny from '/home/rguktongole/Desktop/react/weather/src/assets/images/Sunny.jpg'

const BackgroundLayout = () => {

  const { weather } = useStateContext()
  const [image, setImage] = useState(Clear)

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions
      if (imageString.toLowerCase().includes('clear')) {
        setImage(Clear)
      } else if (imageString.toLowerCase().includes('cloud')) {
        setImage(Cloudy)
      } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(Rainy)
      } else if (imageString.toLowerCase().includes('snow')) {
        setImage(Snow)
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(Fog)
      } else if (imageString.toLowerCase().includes('sunny')) {
        setImage(Sunny)
      } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage(Stormy)
      }
    }
  }, [weather])

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout