import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, FlatList, Dimensions, ProgressBarAndroid } from 'react-native'
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import PostProfile from './PostProfile'
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import GestionPerfil from './GestionPerfil'

class ProfileAutor extends Component {
async componentWillReceiveProps(){

 

  
}
  async cargarPublicaciones() {
    this.setState({ publicaciones: this.props.getPublicacionesUsuario })
    listaPublicaciones = []
    for (let i = 0; i < this.state.publicaciones.length; i += 3) {
      arrayLista = []
      for (let j = i; j < i + 3; j++) {
        arrayLista.push(this.state.publicaciones[j])
      }
      listaPublicaciones.push(arrayLista)
    }
    this.setState({ listaPublicaciones: listaPublicaciones })




    await this.setState({ loadingImages: false })
    await this.setState({ loading: false })


  }

  componentWillUnmount() {
    
    this.props.limpiarUsuarioImagenes()
     this.props.conseguirUsuario( this.props.usuario.user.uid)

  }


  state = {
    loading: true,
    loadingImages: true,
    datosUser: null,
    publicaciones: null,
    listaPublicaciones: null,
    editor: false
  };
  componentWillMount() {
    
    this.props.limpiarUsuarioImagenes()
    this.cargarDatos()
  }

  async cargarDatos() {
    const autorId = this.props.navigation.getParam('uid', this.props.usuario.user.uid);
 
    
    
    await this.props.conseguirPublicaciones(autorId)
    await this.props.conseguirUsuario(autorId)
    await this.setState({autorId: autorId})

    setTimeout(async () => {
      if (this.state.loading && this.props.datosUsuario.datosUser != null) {

        await this.setState({ datosUser: JSON.stringify(this.props.datosUsuario.datosUser) })
        if (this.props.usuarioProio.user.uid == autorId){
            this.setState({editor: true})
        }
        
        
      }
    }, 200)

   




  }

  async componentDidUpdate(){
    
    
    const autorId = await this.props.navigation.getParam('uid', this.props.usuario.user.uid);
    
   
     if (this.state.autorId != autorId){
       await this.setState({ loading: true })
       await this.setState({ loadingImages: true })
   
       await this.setState({autorId: autorId})
   
       this.cargarDatos()
     }else{
      if (this.props.getPublicacionesUsuario != null && this.state.loadingImages) {
        
        this.cargarPublicaciones()
      }
     }


    
  }





  irEditarPerfil = (values) => {

    this.props.navigation.navigate('EditarPerfil')
  }

  render() {




    if (!this.state.loading) {


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
              <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} >
                <Ionicons name='ios-arrow-round-back' size={40} />
              </TouchableOpacity>
            }
            centerComponent={
              <Text style={{ fontSize: 18, marginLeft: -width * 0.6, fontWeight: "bold" }}>{JSON.parse(this.state.datosUser).usuario}</Text>
            }
          
          />
          <View style={{ borderTopColor: '#D6D6D6', borderTopWidth: 1, width: width }}>

            <View style={{ height: height * 0.2 }}>
              <GestionPerfil 
              uid={this.state.autorId} 
              editar={this.irEditarPerfil}
               foto={JSON.parse(this.state.datosUser).fotoPerfil} 
               editor={this.state.editor} user={JSON.parse(this.state.datosUser)} 
               publicaciones={this.state.publicaciones.length  } 
               navigation = {this.props.navigation}
               />
              

            </View>


            {!this.state.loadingImages ?
              <FlatList data={this.state.listaPublicaciones}  style={{marginBottom: 200}}
                renderItem={({ item }) => <PostProfile item={JSON.parse(JSON.stringify(item))} navigation={this.props.navigation} usuario={this.props.datosUsuario.datosUser} editor={false}/>
                }
              />
              :
              <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <ProgressBarAndroid />
              </View>
            }

          </View>

        </View>
      )
    } else {
      return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
          <ProgressBarAndroid />
        </View>
      )
    }

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    usuario: state.reducerSesion,
    datosUsuario: state.reducerDatosProfileAjeno,
    getPublicacionesUsuario: state.reducerPublicacaionesPerfilAjeno,
    usuarioProio: state.reducerSesion
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    conseguirUsuario: (values) => {
      dispatch({ type: 'CONSEGUIR_USUARIO_PERFIL_AJENO', datos: values })
    },
    limpiarUsuarioImagenes: () => {
      dispatch({ type: 'LIMPIAR_PUBLICACIONES_PERFIL_AJENO' })

    }, conseguirPublicaciones: (values) => {
      dispatch({ type: 'CONSEGUIR_PUBLICACIONES_PERFIL_AJENO', datos: values })
    },
    limpiarUsuario: () => {
      dispatch({ type: 'LIMPIAR_USUARIO' })

    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileAutor)