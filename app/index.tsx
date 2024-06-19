import React, { useState } from 'react'
import { View, StyleSheet, Switch, Text } from 'react-native'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../src/constant'
import WeatherSearch from '../src/components/weatherSearch'
import WeatherInfo from '../src/components/weatherInfo'

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const searchWeather = (location) => {
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data
        data.visibility /= 1000
        data.visibility = data.visibility.toFixed(2)
        data.main.temp -= 273.15
        data.main.temp = data.main.temp.toFixed(2)
        setWeatherData(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, darkMode && styles.darkText]}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>
      <WeatherSearch searchWeather={searchWeather} darkMode={darkMode} />
      {weatherData && <WeatherInfo weatherData={weatherData} darkMode={darkMode} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  darkContainer: {
    backgroundColor: '#1E1E1E',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333333',
    marginRight: 10,
  },
  darkText: {
    color: '#DDDDDD',
  },
})

export default App
