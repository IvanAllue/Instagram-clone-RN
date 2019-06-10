import React, { Component } from 'react'
import { Text, View, Button, Dimensions, Image, TouchableHighlight } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';


var width = Dimensions.get('window').width;


export default class Post extends Component {
  render() {
   
    return (
      <View>

        <View style={{ height: 50, flexDirection: "row", borderBottomColor: '#808080',borderBottomWidth: 0.2, marginBottom: 1}}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Avatar
              size={30}
              rounded
              source={{
                uri: this.props.autor.fotoPerfil
              }}
            />
          </View>
          <View style={{ flex: 6, justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold" }}>{this.props.autor.usuario}</Text>
          </View>
        </View>

        <Image style={{ width: width, height: width,borderTopWidth: 0.2 }} source={{ uri: this.props.item.url }} />
        <View style={{ height: 50, flexDirection: "row" }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Ionicons name='ios-heart-empty' size={30} />
          </View>

          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Comentarios')}>
              <Ionicons name='ios-chatbubbles' size={30} />
            </TouchableHighlight>

          </View>
          <View style={{ flex: 6 }}></View>
        </View>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Comentarios')}>
          <Text>{this.props.item.texto}</Text>
        </TouchableHighlight>
        {/* <Text> Publicacion </Text>
        <Button title="Comentarios"
        onPress={()=>this.props.navigation.navigate('Comentarios')}></Button> */}
      </View>
    )
  }
}
