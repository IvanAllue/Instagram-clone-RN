import React from 'react';
import { Text, View, StyleSheet, Button, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import Post from './Post'

class Home extends React.Component {
 
  componentDidMount() {
    this.props.descargarPublicaciones()
  }
  render() {
   

    return (
      <View style={styles.container}>

        <FlatList data={this.props.publicaciones}
          renderItem={({ item, index }) => <Post item={item} navigation = {this.props.navigation} autor={this.props.autores[index]}/>
          }
        />

        {/* <Button title="Publicacion"
        onPress={()=>this.props.navigation.navigate('Autor')}></Button>

<Button title="Comentarios"
        onPress={()=>this.props.navigation.navigate('Comentarios')}></Button> */}
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