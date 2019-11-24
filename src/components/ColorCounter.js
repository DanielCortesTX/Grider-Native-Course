import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorCounter = ({ color }) => {
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Text>{color}</Text>
      <Button 
        title={`Increase ${color}`}/>
      <Button  
        title={`Decrease ${color}`}/>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ColorCounter