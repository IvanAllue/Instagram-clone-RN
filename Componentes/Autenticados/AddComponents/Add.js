import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, CameraRoll, Image, Dimensions, ScrollView } from 'react-native'
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux'


import { Permissions } from 'expo';

var width = Dimensions.get('window').width;

class Add extends Component {

  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.getPhotos()
  }

  state = {
    image: [],
    imageSelected: null
  };
  async setNewImage(uri) {

    this.setState({ imageSelected: uri });
    await this.props.imagenSeleccionada(uri)

    console.log(this.props.imagen.imagenSeleccionada);



  }
  getPhotos = () => {
    CameraRoll.getPhotos({ first: 50, assetType: 'Photos' }).then(response => this.setState({ image: response.edges }))
  }
  setPhotos() {
    return this.state.image.map((item, k) => {
      return (
        <TouchableOpacity key={k} onPress={() => { this.setNewImage(item.node.image.uri) }}>
          <Image source={{ uri: item.node.image.uri }} style={{ width: 100, height: 100 }}></Image>
        </TouchableOpacity>
      )
    })
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

          <View style={{ flex: 1, flexDirection: "row" }}>
            {this.setPhotos()}
          </View>

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