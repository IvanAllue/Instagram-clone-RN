import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'

import { autenticacion } from './Servicios/Firebase'

import RutasNoAutenticadas from '../Componentes/NoAutenticados/RutasNoAutenticadas'
import RutasAutenticadas from '../Componentes/Autenticados/RutasAutenticadas'
import { actionEstablecerSesion } from './Servicios/Acciones';
import { actionCerrarSesion } from './Servicios/Acciones'
import Profile from '../Componentes/Autenticados/Profile'

class Seleccion extends Component {
  async componentDidMount() {

    await this.props.autenticacion()
  }



  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    
    return (
      <View style={{ flex: 1 }}>
        {this.props.usuario ? <RutasAutenticadas /> : <RutasNoAutenticadas />}      
        {/* <Profile /> */}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    usuario: state.reducerSesion
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
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
