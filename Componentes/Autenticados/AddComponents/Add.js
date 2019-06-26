import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, CameraRoll, Image, Dimensions, ScrollView, FlatList } from 'react-native'
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux'


import { Permissions } from 'expo';

import AddGaleriaImagenes from './AddGaleriaImagenes'

var width = Dimensions.get('window').width;

class Add extends Component {

  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.getPhotos()
  }

  state = {
    image: [],
    imageSelected: null,
    listaImagenes: null,
  };
  async setNewImage(uri) {

    this.setState({ imageSelected: uri });
    await this.props.imagenSeleccionada(uri)




  }
  getPhotos = async () => {
    await CameraRoll.getPhotos({ first: 200, assetType: 'Photos' }).then(response => this.setState({ image: response.edges }))
    listaPublicaciones = []
    for (let i = 0; i < this.state.image.length; i += 4) {
      arrayLista = []
      for (let j = i; j < i + 4; j++) {
        arrayLista.push(this.state.image[j])
      }
      listaPublicaciones.push(arrayLista)
    }
    this.setState({ listaImagenes: listaPublicaciones })

  }
   listener = async (uri) => {
   this.setState({imageSelected: uri})

   await this.props.imagenSeleccionada(uri)


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
          leftComponent={
            <TouchableOpacity onPress={() => {
              this.props.borrarImagen()
              this.setState({
                imageSelected: null
              })
              this.props.navigation.navigate('Home')
            }}>
              <Ionicons name='md-close' size={35} />
            </TouchableOpacity>
          }

          rightComponent={this.state.imageSelected != null &&
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('NuevaPublicacion') }}>
              <Text style={{ color: '#0077CC', fontSize: 18, marginLeft: -10 }}> Siguiente </Text>
            </TouchableOpacity>
          }
        />

        <ScrollView>
          {this.state.imageSelected != null &&
            <Image source={{ uri: this.state.imageSelected }} style={{ width: width, height: width }}></Image>
          }
          {this.state.listaImagenes != null &&
            <View style={{ flex: 1, flexDirection: "row" }}>
              <FlatList data={this.state.listaImagenes} style={{ marginBottom: 200 }}
                renderItem={({ item }) => <AddGaleriaImagenes item={item} listener={this.listener} />
                }
              />
            </View>
          }


        </ScrollView>



      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});


const mapStateToProps = (state, ownProps) => {
  return {
    imagen: state.reducerImagenSeleccionada
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    imagenSeleccionada: (values) => {
      dispatch({ type: 'IMAGEN_SELECCIONADA', datos: values })
    },
    borrarImagen: () => {
      dispatch({ type: 'BORRAR_IMAGEN' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)