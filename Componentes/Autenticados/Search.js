import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableHighlight, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import PostProfile from './PostItems/TresFotosGaleria'
class Search extends Component {
  state = {
    listaPublicaciones: null
  }
  componentWillMount() {
    this.props.descargarPublicaciones()
  }
  componentDidUpdate() {
    if (this.props.publicaciones != null && this.props.autores && this.state.listaPublicaciones == null) {
      listaPublicaciones = []
      for (let i = 0; i < this.props.publicaciones.length; i += 3) {
        arrayLista = []
        for (let j = i; j < i + 3; j++) {
          arrayLista.push({ publicaciones: this.props.publicaciones[j], usuario: this.props.autores[j] })
        }
        listaPublicaciones.push(arrayLista)
      }

      this.setState({ listaPublicaciones: listaPublicaciones })



    }

  }
  render() {
    return (
      <View style={styles.container}>

        <View style={{ flex: 1, flexDirection: "row", marginTop: 24, alignItems: "center" }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SearchProfile') }}>
              <Ionicons name='ios-search' size={30} />
            </TouchableHighlight>
          </View>
          <View style={{ flex: 9, }}>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SearchProfile') }}>
              <Text style={{ fontSize: 17, padding: 5 }}>Buscar</Text>
            </TouchableHighlight>

          </View>
        </View>
        <View style={{ flex: 9 }}>
          {this.state.listaPublicaciones != null &&
            <FlatList data={this.state.listaPublicaciones}

              renderItem={({ item, index }) =><PostProfile item={item} navigation={this.props.navigation} usuario={null} editor={false} />}
            />
          }
        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
});

const mapStateToProps = (state) => {
  return {
    publicaciones: state.reducerDescargarPublicaciones,
    autores: state.reducerDescargarAutores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    descargarPublicaciones: () => {
      dispatch({ type: 'DESCARGAR_PUBLICACIONES' })
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
