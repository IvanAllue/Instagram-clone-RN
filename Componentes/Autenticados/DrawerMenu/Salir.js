import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { autenticacion } from '../../../Store/Servicios/Firebase'


export default class Salir extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {autenticacion.signOut() }}
        underlayColor="white"
      >
        <View>
          <Text style={{ fontSize: 15, color: '#0077CC' }}> Salir</Text>
        </View>

      </TouchableOpacity>
    );
  }
}
