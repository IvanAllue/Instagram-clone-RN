import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux'

 class Comentarios extends Component {
  state = {
    autorPublicacion: null,
    publicacion: null,
    loading: true,
    usuario: null
  }
  async componentWillMount() {
    autorPublicacion = this.props.navigation.getParam('autor', null);
    await this.setState({ autorPublicacion })
    publicacion = this.props.navigation.getParam('publicacion', null);
    await this.setState({ publicacion: publicacion })
    usuario = this.props.navigation.getParam('usuario', null);
    await this.setState({ usuario: usuario })
   
    this.setState({ loading: false })
   
    

  }
  componentDidUpdate(){
    console.log('====================================');
    console.log(this.props.imagenPerfil);
    console.log('====================================');

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
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{flex: 2, backgroundColor: '#747474'}}>
            

            </View>
            <View style={{flex: 7,  backgroundColor: '#434343'}}></View>
            <View style={{flex: 3, backgroundColor: '#989898'}}></View>
          </View>
          {/* <Button title="Publicacion"
      onPress={()=>this.props.navigation.navigate('Autor')}></Button> */}
        </View>
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
    dispatch1: () => {
      dispatch(actionCreator)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps, )(Comentarios)
