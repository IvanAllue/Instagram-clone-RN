import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'

import { autenticacion } from './Servicios/Firebase'
import Profile from '../Componentes/Autenticados/Profile'
import RutasNoAutenticadas from '../Componentes/NoAutenticados/RutasNoAutenticadas'
import RutasAutenticadas from '../Componentes/Autenticados/RutasAutenticadas'
import { actionEstablecerSesion } from './Servicios/Acciones';
import { actionCerrarSesion } from './Servicios/Acciones'


 

class Seleccion extends Component {
   componentDidMount() {
    setTimeout(() =>{      
      if (this.state.loading == true) {
        this.setState({ loading: false })
      }
    }, 2500);   
  }
  async componentWillMount() {
    await this.props.autenticacion()
  }
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    if (this.state.loading == false) {
      return (
        <View style={{ flex: 1 }}>
          {this.props.usuario ? <RutasAutenticadas /> : <RutasNoAutenticadas />}
          {/* <Profile/> */}
        </View>
      );
    } else {
      return (
        <View>
        </View>
      )
    }
  }
}
const mapStateToProps = (state) => {
  return {
    usuario: state.reducerSesion
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autenticacion: () => {
      autenticacion.onAuthStateChanged(function (user) {
        if (user) {
          dispatch(actionEstablecerSesion(user))
        } else {
          dispatch(actionCerrarSesion())
        }
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Seleccion)
