import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Add extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Text> Add </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
    },
  });