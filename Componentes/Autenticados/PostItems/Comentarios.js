import React, { Component } from 'react'
import { Text, View, Button, TextInput, TouchableHighlight, KeyboardAvoidingView, FlatList } from 'react-native'
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux'
import Comentario from './Comentario'

class Comentarios extends Component {
  state = {
    autorPublicacion: null,
    publicacion: null,
    loading: true,
    usuario: null,
    comentario: '',
    idPost: null
  }
  async componentWillMount() {
    autorPublicacion = this.props.navigation.getParam('autor', null);
    await this.setState({ autorPublicacion })
    publicacion = this.props.navigation.getParam('publicacion', null);
    await this.setState({ publicacion: publicacion })
    usuario = this.props.navigation.getParam('usuario', null);
    await this.setState({ usuario: usuario })
    idPost =  this.props.navigation.getParam('idPost', null);
    await this.setState({ idPost: idPost })

    this.props.descargarComentarios( this.state.idPost)
    





  }

  async cambioTexto(texto) {
    await this.setState({ texto: texto })

  }

  enviarComentario() {

    this.props.enviarComentario({ idPublicacion:  this.state.idPost, texto: this.state.texto, datosUser: this.props.imagenPerfil.datosUser })
  }

  componentWillUnmount(){
   this.props.limpiarComentarios()
    
  }
  componentDidUpdate() {

    if (this.state.loading && this.props.comentarios != null) {
      this.setState({ loading: false })

    }



  }
  render() {

    if (this.state.loading) {
      return (
        <View></View>
      )
    } else {


      return (
        <View style={{ flex: 1 }}>
          {this.state.publicacion.texto.length > 0 &&

            <View style={{ flex: 2, flexDirection: "row" }}>
              <View style={{ flex: 2, alignItems: "center", paddingTop: 10 }}>
                <Avatar size={60} rounded source={{ uri: this.state.autorPublicacion.fotoPerfil }} />
              </View>
              <View style={{ flex: 9, }}>
                <Text> <Text style={{ fontWeight: "bold", fontSize: 18 }}>{this.state.autorPublicacion.usuario}:</Text> {this.state.publicacion.texto}</Text>
              </View>
            </View>

          }

          <View style={{ flex: 7}}>
            <FlatList data={this.props.comentarios}
              refreshing={false}
              onRefresh={() => {
                this.props.descargarComentarios(this.state.idPost)
              }}
              renderItem={({ item, index }) =>
                <Comentario item={item} navigation={this.props.navigation}  />
              }
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

            <View style={{ flex: 2, alignItems: "center" }}>
              <Avatar size={40} rounded source={{ uri: JSON.parse(JSON.stringify(this.props.imagenPerfil.datosUser)).fotoPerfil }} />
            </View>
            <View style={{ flex: 7, }}>
              <TextInput
                placeholder="Añade un comentario..."
                onChangeText={(texto) => { this.cambioTexto(texto) }}
                ref={input => { this.textInput = input }} 
              ></TextInput>
            </View>
            <View style={{ flex: 3, alignItems: "center" }}>
              <TouchableHighlight onPress={() => { 
                this.enviarComentario() 
                this.textInput.clear()}}>
                <Text style={{ color: '#0077CC' }}>Publicar</Text>
              </TouchableHighlight>
            </View>
          </View>


          {/* <Button title="Publicacion"
      onPress={()=>this.props.navigation.navigate('Autor')}></Button> */}
        </View >
      )
    }

  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    imagenPerfil: state.reducerDatosProfile,
    comentarios: state.reducerComentarios
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    enviarComentario: (values) => {
      dispatch({ type: 'ENVIAR_COMENTARIO', datos: values })
    }, descargarComentarios: (values) => {
      dispatch({ type: 'DESCARGAR_COMENTARIOS', datos: values })
    },limpiarComentarios: () => {
      dispatch({ type: 'LIMPIAR_COMENTARIOS' })
    },
   
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Comentarios)
