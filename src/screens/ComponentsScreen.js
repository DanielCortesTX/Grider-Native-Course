import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

// export default function ComponentsScreen() {
//   return (
//     <div>
      
//     </div>
//   )
// }

const ComponentsScreen = () => {
  const name = {name: 'Daniel'}
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text style={styles.secondStyle}>Hi THere {name.name}!</Text>
      <Text></Text>
    </View>
    )
  
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  secondStyle: {
    fontSize: 45
  }
})

export default ComponentsScreen