import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RutasNoAutenticadas from './Componentes/NoAutenticados/RutasNoAutenticadas'
import RutasAutenticadas from './Componentes/Autenticados/RutasAutenticadas'
import Seleccion from './Store/Seleccion'
//react-redux
import { Provider } from 'react-redux'

//redux
import Store from './Store/Store'

export default class App extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Provider store={Store}>
          
          <Seleccion />
        </Provider>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
