import React from 'react';
import { View, StyleSheet, FlatList, ProgressBarAndroid } from 'react-native'
import { connect } from 'react-redux'
import Post from './Post'

class Home extends React.Component {
  state = {
    loading: true,
    refreshing: false
  }

  componentDidMount() {
    this.props.conseguirUsuario(this.props.usuario.user.uid)
   // this.props.descargarPublicaciones()
  }

  componentWillReceiveProps() {
    this.setState({ loading: true })
  }

  render() {
    if (!this.state.loading) {
      return (
        <View style={styles.container}>         
          <FlatList data={this.props.publicaciones}
          refreshing={this.state.refreshing}
          onRefresh={()=>{  this.props.descargarPublicaciones()
          }}
            renderItem={({ item, index }) =>
            <Post item={item} navigation={this.props.navigation} autor={this.props.autores[index]} />
            }
          />         
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


const mapStateToProps = (state) => {
  return {
    usuario: state.reducerSesion,
    publicaciones: state.reducerDescargarPublicaciones,
    autores: state.reducerDescargarAutores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    descargarPublicaciones: () => {
      dispatch({ type: 'DESCARGAR_PUBLICACIONES' })
    },
    conseguirUsuario: (values) => {
      dispatch({ type: 'CONSEGUIR_USUARIO', datos: values })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)