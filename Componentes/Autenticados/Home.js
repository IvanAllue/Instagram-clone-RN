import React from 'react';
import { Text, View, StyleSheet, Button, FlatList, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
var width = Dimensions.get('window').width;


class Home extends React.Component {
 
  componentDidMount() {
    this.props.descargarPublicaciones()
  }
  render() {
    console.log(this.props.publicaciones);

    return (
      <View style={styles.container}>

        <FlatList data={this.props.publicaciones}
          renderItem={({ item }) => {
            return (
              <View style={{marginBottom: 10}}>
                <Image style={{ width: width, height: width }} source={{uri: item.url}} />

              </View>
            )
          }
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
    publicaciones: state.reducerDescargarPublicaciones
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