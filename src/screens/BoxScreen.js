import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const BoxScreen = () => {
   return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
      <View style={styles.chalStyle}>
        <View style={{ height: 100, width: 100, backgroundColor: 'rgb(000, 000, 255)'}}/>
        <View style={{ height: 100, width: 100, backgroundColor: 'rgb(000, 255, 000)', top: 100}}/>
        <View style={{ height: 100, width: 100, backgroundColor: 'rgb(255, 000, 000)'}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red'
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    fontSize: 18,
    ...StyleSheet.absoluteFillObject
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red'
  }
})

export default BoxScreen