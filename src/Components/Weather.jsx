import React, { useState } from 'react'
import '../Styles/Main.css'
import FetchData from '../Hooks/FetchData'

export const Weather = () => {
  const [city, setCity] = useState('bogota');
  const [inputValue, setInputValue] = useState('');
  const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=63021b25a94d6574d0db00a5c89a6e0e`
  const { data, error, loading } = FetchData({ url: apiUrl, param: city })
  const icon = data?.list[0].weather[0].icon;
  const icons = `https://openweathermap.org/img/wn/${icon}@2x.png`
  console.log(data);
  const kelvinTemp = data?.list[0].main.temp;
  const kelvinToCelsius = kelvinTemp - 273.15;
  const celcius = Math.floor(kelvinToCelsius)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

  }

  const saveCity = (e) => {
    e.preventDefault();
    setCity(inputValue);
    console.log(city);
    setInputValue('')
  }

  return (
    <div className='contWeather'>
      <form
        onSubmit={saveCity}
        className='cityInput'>
        <input
          type="text"
          placeholder='Type a city... 🌏'
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={!inputValue.trim()}>🔍</button>
      </form>
      <h2 className='city'>{data?.city.name}</h2>
      <h3 className='temp'>{`${celcius}°C`}</h3>
      <div className="contIcon">
        <img src={icons} alt="weather icon" />
      </div>
    </div>
  )
}
