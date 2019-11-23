import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const ListScreen = () => {
  const friends = [
    {
      name: 'num 1',
      age: 1
    },
    {
      name: 'num 2',
      age: 2
    },
    {
      name: 'num 3',
      age: 3
    },
    {
      name: 'num 4',
      age: 4
    },
    {
      name: 'num 5',
      age: 5
    },
    {
      name: 'num 6',
      age: 6
    },
    {
      name: 'num 7',
      age: 7
    },
    {
      name: 'num 8',
      age: 8
    },
    {
      name: 'num 9',
      age: 9
    },
    {
      name: 'num 10',
      age: 10
    }
  ]
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends} 
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
      }}
    />
  )

  
}

const styles = StyleSheet.create({
    textStyle: {
      marginVertical: 50
    }
})

export default ListScreen