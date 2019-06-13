import React from 'react';
import { Text, View, StyleSheet, Button, FlatList, Image, TouchableHighlight, ProgressBarAndroid, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import Post from './Post'
import Ionicons from 'react-native-vector-icons/Ionicons';

class Home extends React.Component {
  state = {
    cargando: true
  }

  componentDidMount() {
    this.props.descargarPublicaciones()
  }

  componentWillReceiveProps() {
    this.setState({ cargando: false })
  }

  render() {
    if (!this.state.cargando) {
      return (
        <View style={styles.container}>
          <TouchableHighlight onPress={() => {
            this.props.descargarPublicaciones()
          }}>
            <Ionicons name='md-refresh' color='#0077CC' size={30} />

          </TouchableHighlight>
          <FlatList data={this.props.publicaciones}
            renderItem={({ item, index }) =>
            <Post item={item} navigation={this.props.navigation} autor={this.props.autores[index]} />
            }
          />

          {/* <Button title="Publicacion"
          onPress={()=>this.props.navigation.navigate('Autor')}></Button>
  
  <Button title="Comentarios"
          onPress={()=>this.props.navigation.navigate('Comentarios')}></Button> */}
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
    justifyContent: 'center',
  },
});


const mapStateToProps = (state, ownProps) => {
  return {
    publicaciones: state.reducerDescargarPublicaciones,
    autores: state.reducerDescargarAutores
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    descargarPublicaciones: () => {
      dispatch({ type: 'DESCARGAR_PUBLICACIONES' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)