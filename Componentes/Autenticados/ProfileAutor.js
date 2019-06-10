import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, Dimensions, ProgressBarAndroid } from 'react-native'
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import { baseDatos } from '../../Store/Servicios/Firebase'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import GestionPerfil from './ProfileItems/GestionPerfil'

class ProfileAutor extends Component {

  componentWillUnmount(){
    console.log('adios');
    
  }
  
  
  state = {
    loading: true,
    datosUser: null
  };
  componentWillMount(){
    this.cargarDatos()
  }

  async cargarDatos() {
    const autorId = this.props.navigation.getParam('uid',this.props.usuario.user.uid);
    await this.props.conseguirUsuario(autorId)
    
     setTimeout(async ()=>{
       if (this.state.loading && this.props.datosUsuario.datosUser != null) {     
         await this.setState({ datosUser: JSON.stringify(this.props.datosUsuario.datosUser) })
         await this.setState({ loading: false })
         console.log(this.state.datosUser);        
       }
     },50)
     
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
              <Text style={{ fontSize: 18, marginLeft: -width*0.6, fontWeight: "bold" }}>{JSON.parse(this.state.datosUser).usuario}</Text>
            }
            rightComponent={
              <TouchableOpacity onPress={() => { this.props.navigation.toggleDrawer() }}>
                <Ionicons name='md-menu' size={30} />
              </TouchableOpacity>
            }
          />
          <View style={{ borderTopColor: '#D6D6D6', borderTopWidth: 1, width: width }}>

            <View style={{ height: height * 0.2 }}>
              <GestionPerfil editar={this.irEditarPerfil} foto={JSON.parse(this.state.datosUser).fotoPerfil} />

            </View>




            <Button title="Post"
              onPress={() => this.props.navigation.navigate('EditarPerfil')}></Button>

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
    datosUsuario: state.reducerDatosProfile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    conseguirUsuario: (values) => {
      dispatch({ type: 'CONSEGUIR_USUARIO', datos: values })
    },
    limpiarUsuario: () => {
      dispatch({ type: 'LIMPIAR_USUARIO'})

    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileAutor)