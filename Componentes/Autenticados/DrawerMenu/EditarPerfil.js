import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ImagePicker } from 'expo';

import { connect } from 'react-redux'


var width = Dimensions.get('window').width

import { Avatar } from 'react-native-elements';


class EditarPerfil extends Component {
  state = {
    image: null,
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {



    let { image } = this.props.imagen

    if (this.props.imagen.imagen != null){
      image = this.props.imagen.imagen
    }
    
    console.log(this.props.imagen.imagen == null);
    
    console.log('====================================');
    console.log({image});
    console.log('====================================');
    return (
      <View>
        <Header
          backgroundColor="#FFF"
          statusBarProps={{ barStyle: 'dark-content', translucent: true }}
          outerContainerStyles={{
            borderBottomColor: '#85106a',
            borderBottomWidth: 0.5,
          }}

          leftComponent={
            <TouchableOpacity onPress={() => {
              this.props.limpiarImagen()
              this.props.navigation.goBack()
            }}>
              <Ionicons name='md-close' size={30} />
            </TouchableOpacity>
          }

          centerComponent={
            <Text style={{ fontSize: 19, marginLeft: - width * 0.5 }}>Editar perfil</Text>
          }
          rightComponent={
            <TouchableOpacity onPress={() => {this.props.navigation.goBack() }}>
              <Ionicons name='md-checkmark' size={30} color={'#0077CC'} />
            </TouchableOpacity>
          }
        />
        <TouchableOpacity
          onPress={this._pickImage}
        >
          <View style={{ alignItems: 'center' }}>

            {image  ?
              <Avatar
                size={100}
                rounded
                source={{
                  uri: image.uri
                }}
              />
              :

              <Avatar
                size={100}
                rounded
                source={{
                  uri:
                    'https://biospain2018.org/wp-content/uploads/2018/08/everis-logo.jpg',
                }}
              />
            }
          </View>



          <Text style={{ fontSize: 17, color: '#0077CC', textAlign: 'center' }}>Cambiar foto del perfil</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4],
    });



    if (!result.cancelled) {
      this.props.cargarImagen(result)
    }
  };

}

const mapStateToProps = (state, ownProps) => {
  return {
    imagen: state.reducerImagenPerfil
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    cargarImagen: (imagen) => {
      dispatch({ type: 'ESTABLECER_IMAGEN_PERFIL', imagen: imagen })
    },

    limpiarImagen: () => {
      dispatch({ type: 'LIMPIAR_IMAGEN_PERFIL'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditarPerfil)


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

