import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Notificaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log(this.props);
    
  }

  render() {
      if (this.props.item.tipo == 'seguir'){
        return (
            <View>
              <Text> Has comenzado a seguir a  </Text>
            </View>
          );
      }
   
  }
}
