import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'

import { autenticacion } from './Servicios/Firebase'

import RutasNoAutenticadas from '../Componentes/NoAutenticados/RutasNoAutenticadas'
import RutasAutenticadas from '../Componentes/Autenticados/RutasAutenticadas'
import { actionEstablecerSesion } from './Servicios/Acciones';
import { actionCerrarSesion } from './Servicios/Acciones'

class Seleccion extends Component {
  componentDidUpdate() {
    if (this.state.loading == true) {
      this.setState({ loading: false })
    }
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
