import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, Dimensions, ProgressBarAndroid } from 'react-native'
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import { baseDatos } from '../../Store/Servicios/Firebase'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import GestionPerfil from './ProfileItems/GestionPerfil'

class Profile extends Component {
  
  state = {
    loading: true,
    datosUser: null
  };



  async cargarDatos() {
  


   await this.props.conseguirUsuario(this.props.usuario.user.uid)
   
    
    if (this.state.loading && this.props.datosUsuario.datosUser != null) {
     

      await this.setState({ datosUser: JSON.stringify(this.props.datosUsuario.datosUser) })
      await this.setState({ loading: false })
    }
  }

  irEditarPerfil = (values) => {

    this.props.navigation.navigate('EditarPerfil')
  }

  render() {
    
    
if (this.props.datosUsuario.datosUser!=null){   
 this.cargarDatos()
}else{
  this.cargarDatos()
}

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
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)