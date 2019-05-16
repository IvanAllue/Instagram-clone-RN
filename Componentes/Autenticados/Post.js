import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Post extends Component {
  render() {
    return (
      <View>
        <Text> Publicacion </Text>
        <Button title="Comentarios"
        onPress={()=>this.props.navigation.navigate('Comentarios')}></Button>
      </View>
    )
  }
}
