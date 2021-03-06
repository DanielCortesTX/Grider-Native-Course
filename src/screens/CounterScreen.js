import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
  const { type, payload } = action
  const { count } = state

  switch (type) {
    case 'increment':
      return { 
        ...state,
        count: count + payload
      }
    case 'decrement':
      return { 
        ...state,
        count: count + payload
      }
    default:
      return state    
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0})
  const { count } = state

  return (
    <View>
    <Button 
      title="Increase"
      onPress={() => dispatch({ type: 'increment', payload: 1})}/>
    <Button 
      title="Decrease"
      onPress={()=> dispatch({ type: 'decrement', payload: -1})}/>
      <Text>Current Count: {count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default CounterScreen