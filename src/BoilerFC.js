import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorCounter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Text>Color counter</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ColorCounter