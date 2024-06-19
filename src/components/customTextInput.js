import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

const CustomTextInput = ({ text, onChange, multiline = false, placeholder, numberOfLines, darkMode }) => (
  <View style={styles.container}>
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={[styles.input, darkMode && styles.darkInput]}
      placeholder={placeholder}
      placeholderTextColor={darkMode ? '#AAAAAA' : '#888888'}
      onChangeText={onChange}
      defaultValue={text}
    />
  </View>
)

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 5,
    padding: 10,
    color: '#333333',
  },
  darkInput: {
    borderColor: '#555555',
    color: '#DDDDDD',
  },
  container: {
    marginTop: 20,
  },
})

export default CustomTextInput
