import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Salir from './Salir'
var width = Dimensions.get('window').width

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <Header
          backgroundColor="#FFF"
          statusBarProps={{ barStyle: 'dark-content', translucent: true }}
          outerContainerStyles={{
            borderBottomColor: '#85106a',
            borderBottomWidth: 0.5,
          }}
        >
          <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
            <Ionicons name='ios-arrow-round-back' size={40} />
          </TouchableOpacity>

          <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: - width * 0.4 }}>Configuración</Text>
        </Header>


        <View style={styles.viewContenido}>
        </View>


        <View style={styles.botonSalir}>
          <Salir />
        </View>
        


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  viewContenido: {
    flex: 1,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#D6D6D6',
    borderTopWidth: 1
  },
  botonSalir: {
    width: width,
    padding: 15,

  }

});
