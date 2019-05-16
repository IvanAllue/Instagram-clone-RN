import React, { Component } from 'react'
import { Text, View , Button} from 'react-native'

export default class Comentarios extends Component {
  render() {
    
    return (
      <View>
        <Text> Comentarios </Text>
        <Button title="Publicacion"
        onPress={()=>this.props.navigation.navigate('Autor')}></Button>
      </View>
    )
  }
}
