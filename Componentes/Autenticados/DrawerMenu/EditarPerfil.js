import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ImagePicker, Permissions } from 'expo';

import { connect } from 'react-redux'


var width = Dimensions.get('window').width

import { Avatar } from 'react-native-elements';


class EditarPerfil extends Component {

 async componentWillMount(){
  await this.setState({datosUser: JSON.stringify(this.props.datosUsuario.datosUser)})

  }

  
  state = {
    image: null,
    loading: true,
    datosUser: null
  };

  conseguirPermisos = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await Permissions.askAsync(Permissions.CAMERA);
  }


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {



    let { image } = this.props.imagen

    if (this.props.imagen.imagen != null) {
      image = this.props.imagen.imagen
    }
    
   

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
            <TouchableOpacity onPress={() => {
              this.props.confirmarCambios()
              this.props.navigation.goBack()
            }}>
              <Ionicons name='md-checkmark' size={30} color={'#0077CC'} />
            </TouchableOpacity>
          }
        />
        <TouchableOpacity

          onPress={() => {
            this.conseguirPermisos()
            this._pickImage()
          }
          }
        >
          <View style={{ alignItems: 'center' }}>

            {image ?
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
                  uri: JSON.parse(this.state.datosUser).fotoPerfil
                }}
              />
            }
          </View>



          <Text style={{ fontSize: 17, color: '#0077CC', textAlign: 'center' }}>Cambiar foto del perfil</Text>
        </TouchableOpacity>
      </View >
    );
  }

  _pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4],
    });



    if (!result.cancelled) {
      console.log(result);

      this.props.cargarImagen(result)
    }
  };

}

const mapStateToProps = (state, ownProps) => {
  return {
    imagen: state.reducerImagenPerfil,
    datosUsuario: state.reducerDatosProfile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    cargarImagen: (imagen) => {
      dispatch({ type: 'ESTABLECER_IMAGEN_PERFIL', imagen: imagen })
    },

    limpiarImagen: () => {
      dispatch({ type: 'LIMPIAR_IMAGEN_PERFIL' })
    },
    confirmarCambios: () => {
      dispatch({ type: 'CONFIRMAR_CAMBIOS_PERFIL' })
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

