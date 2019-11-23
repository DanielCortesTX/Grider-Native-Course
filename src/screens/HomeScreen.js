import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen!!</Text>
      <Text>Hi THere!</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;