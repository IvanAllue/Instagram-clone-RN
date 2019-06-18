import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableHighlight } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{ flex: 1, flexDirection: "row", marginTop: 24, alignItems: "center" }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <TouchableHighlight onPress={()=>{this.props.navigation.navigate('SearchProfile')}}>
              <Ionicons name='ios-search' size={30} />
            </TouchableHighlight>
          </View>
          <View style={{ flex: 9, }}>
            <TouchableHighlight onPress={()=>{this.props.navigation.navigate('SearchProfile')}}>
              <Text style={{ color: '#A6A6A6', fontSize: 17, padding: 5 }}>Buscar</Text>
            </TouchableHighlight>

          </View>
        </View>
        <View style={{ flex: 9, backgroundColor: '#454545' }}>

        </View>
        {/* <Button title="Ir a los post"
        onPress={()=>{this.props.navigation.navigate('Post')}}> */}

        {/* </Button> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
});

