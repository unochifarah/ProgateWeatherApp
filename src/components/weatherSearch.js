import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import CustomTextInput from './customTextInput'

const WeatherSearch = ({ searchWeather, darkMode }) => {
  const [location, setLocation] = useState('')

  return (
    <View style={[styles.searchContainer, darkMode && styles.darkSearchContainer]}>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        text={location}
        onChange={setLocation}
        darkMode={darkMode}
      />
      <View style={styles.buttonWrapper}>
        <Button title="Search" onPress={() => searchWeather(location)} color={darkMode ? '#555555' : '#2196F3'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
  },
  darkSearchContainer: {
    backgroundColor: '#444444',
  },
  buttonWrapper: {
    marginTop: 20,
  },
})

export default WeatherSearch
