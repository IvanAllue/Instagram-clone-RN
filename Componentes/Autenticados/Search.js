import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default  class Search extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Text> Search </Text>
        <Button title="Ir a los post"
        onPress={()=>{this.props.navigation.navigate('Post')}}>

        </Button>
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

