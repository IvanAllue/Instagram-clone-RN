import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Add extends Component {
  render() {
    return (
      
        <View style={styles.container}>
        <Button title="x"
        onPress={()=>this.props.navigation.goBack()}></Button>
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