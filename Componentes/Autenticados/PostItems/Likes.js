import React, { PureComponent } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, TouchableHighlight, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { Avatar } from 'react-native-elements';
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
var width = Dimensions.get('window').width;

class Likes extends PureComponent {
  async componentWillMount() {
    const uidImagen = this.props.navigation.getParam('uid', null);



    this.props.conseguirUsuarios(uidImagen)


  }

  componentDidUpdate() {
    if (this.state.loading) {
      this.setState({ loading: false })

    }

  }
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      usuarios: null
    };
  }


  render() {
    if (this.state.loading) {
      return (
        <View></View>
      );
    } else {
      return (
        <View>
          <Header
            backgroundColor="#FFF"
            statusBarProps={{ barStyle: 'dark-content', translucent: true }}
            outerContainerStyles={{
              borderBottomColor: '#85106a',
              borderBottomWidth: 0.5,
            }}
            leftComponent={
              <TouchableHighlight onPress={() => { this.props.navigation.goBack() }}>
                <Ionicons name='ios-arrow-round-back' size={40} />
              </TouchableHighlight>
            }
            centerComponent={
              <Text style={{ marginLeft: - width * 0.35, fontSize: 19 }}>Me gusta</Text>
            }

           
            
          />

          <FlatList data={this.props.usuarios}
            renderItem={({ item, index }) => {
              return (

                <TouchableWithoutFeedback onPress={() => {
                  let uid = this.props.userUids[index]
                  this.props.limpiarUsuarioImagenes()

                  this.props.navigation.navigate('AutorProfile', {
                    uid: uid



                  })
                }}>
                  <View style={{ height: 80, marginLeft: 20, flexDirection: "row", marginTop: 10 }}>
                    <View style={{ flex: 2 }}>
                      <Avatar size={55} rounded source={{ uri: JSON.parse(JSON.stringify(item)).fotoPerfil }} />

                    </View>
                    <View style={{ flex: 9 }}>
                      <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 15 }}>{JSON.parse(JSON.stringify(item)).usuario}</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              )
            }
            }
          />
        </View>
      );
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    conseguirUsuarios: (values) => {
      dispatch({ type: 'CONSEGUIR_USUARIOS_LIKES', datos: values })
    },
    limpiarUsuarioImagenes: () => {
      dispatch({ type: 'LIMPIAR_PUBLICACIONES_PERFIL_AJENO' })

    },
    limpiarUsuario: () => {
      dispatch({ type: 'LIMPIAR_USUARIO' })

    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    usuarios: state.reducerUsuariosLike,
    userUids: state.reducerUidsUsuarios
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
