import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

//react-redux
import { connect } from 'react-redux'


//form
import SignUpForm from './Formas/SignUpForm.js'


class SignUp extends Component {
  render() {
    console.log(this.props.numero)
    return (
      <View style={styles.container}>
        <Text>Prueba SignUp</Text>
        <SignUpForm/>
        <Button title="SignIn"
          onPress={() => {
            this.props.navigation.goBack()
          }}
        ></Button>

        <Button title="Aumentar" onPress={this.props.aumentar}> </Button>
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
});


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    aumentar: () => {
      dispatch({type: 'AUMENTAR_REDUCERPRUEBA'})
    }
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    numero: state.reducerPrueba
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
