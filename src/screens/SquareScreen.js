import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <ColorCounter 
        color="Red"
      />
      <ColorCounter 
        color="Green"
      />
      <ColorCounter 
        color="Blue"
      />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default SquareScreen