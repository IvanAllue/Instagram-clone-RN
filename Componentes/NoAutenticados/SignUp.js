import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet, Dimensions, Image, Alert } from 'react-native'

//react-redux
import { connect } from 'react-redux'
import actionRegistro from '../../Store/Servicios/Acciones'


//form
import SignUpForm from './Formas/SignUpForm.js'

var width = Dimensions.get('window').width;



class SignUp extends Component {

  registroDelUsuario = (values) => {

    this.props.registro(values)

    setTimeout(() => {
      if (this.props.error == true) {
        Alert.alert(
          '¡ERROR DURANTE EL REGISTRO!',
          'Ya existe un usuario con ese correo electronico.',
          [

            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false },
        )

      }
    }, 1200)
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={{
          flex: 1, alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image style={{ width: 170, height: 70, resizeMode: 'stretch' }} source={require('../../assets/logoinsta.png')} />

          <Text style={styles.texto}>Registrate para ver fotos y videos de tus amigos</Text>
          <SignUpForm registro={this.registroDelUsuario} />

        </View>

        <TouchableHighlight
          onPress={() => {
            this.props.navigation.goBack()
          }}
        >
          <Text style={styles.login}>¿Ya tienes cuenta? <Text style={{ color: '#000', fontWeight: 'bold' }}>Inicia sesión</Text></Text>
        </TouchableHighlight>


      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    color: '#808080',
    width: width,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopColor: '#808080',
    borderTopWidth: 0.5,

  },
  texto: {
    color: '#9D9D9D',
    fontSize: 17,
    fontWeight: 'bold',
    width: width * 0.8,
    textAlign: 'center'
  }
});


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    registro: (values) => {
      dispatch(actionRegistro(values))
    }
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    error: state.reducerErrorSignup
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
