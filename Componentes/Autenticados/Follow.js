import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'

class Follow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ruta: null
    };
  }
  async componentWillMount() {
    this.props.getNotificacionesTu()
    if(this.props.navigation.state.key == 'Tu')
    this.props.getNotificaciones()



  }

  componentDidUpdate() {

  }
  render() {
    const { navigation } = this.props;
    if (this.props.navigation.state.key == 'Tu') {
      return (
        <View style={styles.container}>

          <Text> {this.props.navigation.state.key} </Text>
          <Button title='Autor' onPress={() => { navigation.navigate('Autor') }}></Button>
        </View>
      )

    } else {
      return (
        <View style={styles.container}>


          <Button title='Autor' onPress={() => { navigation.navigate('Autor') }}></Button>
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
    justifyContent: 'center',
  },
});


const mapStateToProps = (state, ownProps) => {
  return {
    followTu: state.reducerDescargarNotificacionesFollowTu
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNotificacionesTu: () => {
      dispatch({ type: 'DESCARGAR_NOTIFICACIONES_FOLLOW_TU' })
    },
    getNotificaciones: () => {
      dispatch({ type: 'DESCARGAR_NOTIFICACIONES_FOLLOW' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Follow)