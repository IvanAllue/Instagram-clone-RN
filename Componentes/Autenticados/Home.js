import React from 'react';
import { View, StyleSheet, FlatList, ProgressBarAndroid } from 'react-native'
import { connect } from 'react-redux'
import Post from './Post'

class Home extends React.Component {
  state = {
    loading: true,
    refreshing: false
  }

componentWillMount(){
  this.props.conseguirUsuario(this.props.usuario.user.uid)

    



}
componentDidUpdate(){
  if (this.props.usuario != null && this.state.loading){
    this.props.conseguirPostSeguidos()

  }

  if (this.props.publicaciones != null && this.state.loading){

      
    this.setState({ loading: false })
  }
}



  

  render() {
    if (!this.state.loading) {
      return (
        <View style={styles.container}>         
          <FlatList data={this.props.publicaciones}
          refreshing={this.state.refreshing}
          onRefresh={()=>{      this.props.conseguirPostSeguidos()

          }}
            renderItem={({ item, index }) =>{
              
              return (
                <Post item={item.publicacion} padre={'Home'} navigation={this.props.navigation} autor={JSON.parse(JSON.stringify(item.autor))} idPost={JSON.parse(JSON.stringify(item)).key} />

              )
            }
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
    userBd: state.reducerDatosProfile,
    publicaciones: state.reducerPublicacionesSeguidos,
    autores: state.reducerUsuariosSeguidos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    descargarPublicaciones: () => {
      dispatch({ type: 'DESCARGAR_PUBLICACIONES' })
    },
    conseguirUsuario: (values) => {
      dispatch({ type: 'CONSEGUIR_USUARIO', datos: values })
    },
    conseguirPostSeguidos: () => {
      dispatch({ type: 'DESCARGAR_PUBLICACIONES_SEGUIDOS' })

    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)