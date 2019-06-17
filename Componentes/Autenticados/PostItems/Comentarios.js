import React, { Component } from 'react'
import { Text, View, Button, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native'
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux'

class Comentarios extends Component {
  state = {
    autorPublicacion: null,
    publicacion: null,
    loading: true,
    usuario: null,
    comentario: ''
  }
  async componentWillMount() {
    autorPublicacion = this.props.navigation.getParam('autor', null);
    await this.setState({ autorPublicacion })
    publicacion = this.props.navigation.getParam('publicacion', null);
    await this.setState({ publicacion: publicacion })
    usuario = this.props.navigation.getParam('usuario', null);
    await this.setState({ usuario: usuario })




  }

  async cambioTexto(texto) {
    await this.setState({ texto: texto })
    console.log(this.state.texto)

  }

  enviarComentario(){
    
   this.props.enviarComentario({idPublicacion : this.state.publicacion.key, texto: this.state.texto, datosUser: this.props.imagenPerfil.datosUser}) 
  }
  componentDidUpdate() {
   
    if (this.state.loading) {
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

          <View style={{ flex: 7, backgroundColor: '#f394f3' }}>

          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

            <View style={{ flex: 2, alignItems: "center" }}>
              <Avatar size={40} rounded source={{ uri: JSON.parse(JSON.stringify(this.props.imagenPerfil.datosUser)).fotoPerfil }} />
            </View>
            <View style={{ flex: 7, }}>
              <TextInput
                placeholder="Añade un comentario..."
                onChangeText={(texto) => { this.cambioTexto(texto) }}
              ></TextInput>
            </View>
            <View style={{ flex: 3, alignItems: "center" }}>
              <TouchableHighlight onPress={()=>{this.enviarComentario()}}>
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
    imagenPerfil: state.reducerDatosProfile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    enviarComentario: (values) => {
      dispatch({ type: 'ENVIAR_COMENTARIO', datos: values })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Comentarios)
