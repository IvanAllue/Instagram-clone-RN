import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, Dimensions, ProgressBarAndroid, FlatList, ScrollView } from 'react-native'
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import PostProfile from './PostItems/TresFotosGaleria'
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import GestionPerfil from './ProfileItems/GestionPerfil'

class Profile extends Component {
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
  componentDidUpdate() {
    
    if (this.props.getPublicacionesUsuario != null && this.state.loadingImages) {
      this.cargarPublicaciones()
    }
  }
  componentWillMount() {
    this.cargarDatos()
  }


  state = {
    loading: true,
    loadingImages: true,
    datosUser: null,
    publicaciones: null,
    listaPublicaciones: null
  };



  async cargarDatos() {
    await this.props.conseguirPublicaciones(this.props.usuario.user.uid)

   
      if (this.state.loading && this.props.datosUsuario.datosUser != null) {
        await this.setState({ datosUser: JSON.stringify(this.props.datosUsuario.datosUser) })
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
              <Text style={{ fontSize: 18 }}>{JSON.parse(this.state.datosUser).usuario}</Text>
            }
            rightComponent={
              <TouchableOpacity onPress={() => { this.props.navigation.toggleDrawer() }}>
                <Ionicons name='md-menu' size={30} />
              </TouchableOpacity>
            }
          />
          <View style={{ borderTopColor: '#D6D6D6', borderTopWidth: 1, width: width }}>

            <View style={{ height: height * 0.2 }}>
              <GestionPerfil 
              uid = {this.props.usuario.user.uid}
              editar={this.irEditarPerfil} 
              foto={JSON.parse(this.state.datosUser).fotoPerfil} 
              editor={true}  
              publicaciones={this.state.listaPublicaciones.length} 
              navigation={this.props.navigation}
              user={JSON.parse(JSON.stringify(this.props.datosUsuario.datosUser))} />

            </View>
            {!this.state.loadingImages ?
              <ScrollView>
              <FlatList data={this.state.listaPublicaciones} style={{marginBottom: 200}}
                renderItem={({ item }) => {
                  return(
                    <PostProfile item={JSON.parse(JSON.stringify(item))} navigation={this.props.navigation} usuario={JSON.parse(JSON.stringify(this.props.datosUsuario.datosUser))} editor={true}/>
                  )
                }
                }
              />
              </ScrollView>
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
    datosUsuario: state.reducerDatosProfile,
    getPublicacionesUsuario: state.reducerPublicacaionesPerfil
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    conseguirUsuario: (values) => {
      dispatch({ type: 'CONSEGUIR_USUARIO', datos: values })
    }, conseguirPublicaciones: (values) => {
      dispatch({ type: 'CONSEGUIR_PUBLICACIONES', datos: values })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)