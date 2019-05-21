import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet, Dimensions, Image } from 'react-native'

//react-redux
import { connect } from 'react-redux'


//form
import SignUpForm from './Formas/SignUpForm.js'

var width = Dimensions.get('window').width;

class SignUp extends Component {
  render() {
    console.log(this.props.numero)
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1, alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image style={{width: 200, height: 70, resizeMode: 'stretch'}} source={require('../../assets/logoinsta.png')}  />
          <Text style={styles.texto}>Registrate para ver fotos y videos de tus amigos</Text>
          <SignUpForm />

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
  texto:{
    color: '#9D9D9D',
    fontSize: 17,
    fontWeight: 'bold',
    width: width * 0.8,
    textAlign: 'center'
  }
});


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    aumentar: () => {
      //dispatch({ type: 'AUMENTAR_REDUCERPRUEBA' })
    }
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    numero: state.reducerPrueba
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
