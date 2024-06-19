import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const WeatherInfo = ({ weatherData, darkMode }) => {
  const {
    name,
    main: { temp },
    weather,
    visibility,
    wind: { speed },
  } = weatherData
  const [{ main, description, icon }] = weather

  return (
    <View style={[styles.infoContainer, darkMode && styles.darkInfoContainer]}>
      <Text style={[styles.text, darkMode && styles.darkText]}>The weather of {name}</Text>
      <Text style={[styles.temperature, styles.marginTop20, darkMode && styles.darkText]}>{temp} °C</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image source={{ uri: `https://openweathermap.org/img/w/${icon}.png` }} style={styles.weatherIcon} />
        <Text style={[styles.text, styles.bold, darkMode && styles.darkText]}>{main}</Text>
      </View>
      <Text style={[styles.text, darkMode && styles.darkText]}>{description}</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold, darkMode && styles.darkText]}>Visibility :</Text>
        <Text style={[styles.text, styles.marginLeft15, darkMode && styles.darkText]}>{visibility} km</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold, darkMode && styles.darkText]}>Wind Speed :</Text>
        <Text style={[styles.text, styles.marginLeft15, darkMode && styles.darkText]}>{speed} m/s</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  darkInfoContainer: {
    backgroundColor: '#333333',
  },
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333333',
  },
  darkText: {
    color: '#DDDDDD',
  },
  bold: {
    fontWeight: '700',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontWeight: '700',
    fontSize: 50,
    textAlign: 'center',
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
})

export default WeatherInfo
