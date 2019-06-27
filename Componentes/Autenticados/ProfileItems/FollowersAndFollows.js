import React, { PureComponent } from 'react';
import { View, Text, FlatList, TouchableHighlight, ProgressBarAndroid, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { Avatar } from 'react-native-elements';
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
var width = Dimensions.get('window').width;
class FollowersAndFollows extends PureComponent {

  async componentDidUpdate() {

    if (this.props.usuariosArray != null && this.state.render == false) {

      await this.setState({ render: true })

    }
  }

  async componentWillReceiveProps() {
    if (this.state.render) {
      await this.setState({ render: false })

    }

    const listaSeguidores = this.props.navigation.getParam('lista', null);

    await this.setState({ lista: listaSeguidores })

    if (this.state.lista != null) {

      this.props.listaUsuarios(this.state.lista)
    }

  }

  async componentWillMount() {
    const listaSeguidores = this.props.navigation.getParam('lista', null);
    await this.setState({ lista: listaSeguidores })

    const nombre = this.props.navigation.getParam('nombre', null);
    await this.setState({ nombre: nombre })

    console.log(this.state.nombre);


    if (this.state.lista != null) {

      this.props.listaUsuarios(this.state.lista)
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      render: false,
      nombre: null
    };





  }

  render() {


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
            <Text style={{ marginLeft: - width * 0.35, fontSize: 19 }}>{this.state.nombre}</Text>
          }
        />
        {this.state.render ?
          <FlatList data={this.props.usuariosArray}

            renderItem={({ item }) =>
              <View style={{ height: 60, flexDirection: "row" }}>
                <View style={{ flex: 2, alignItems: "center" }}

                >
                  <Avatar
                    onPress={() => { this.props.navigation.navigate('AutorProfile', { uid: item.uid }) }}
                    size={60}
                    rounded
                    source={{
                      uri: item.usuario.fotoPerfil
                    }}
                  />
                </View>
                <View style={{ flex: 8, justifyContent: "center" }}>
                  <TouchableHighlight onPress={() => { this.props.navigation.navigate('AutorProfile', { uid: item.uid }) }}>
                    <Text style={{ fontWeight: "bold" }} >{item.usuario.usuario}</Text>
                  </TouchableHighlight>
                </View>
              </View>
            }
          />
          :
          <View>
            <ProgressBarAndroid />
          </View>

        }
      


      </View>
    );




  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    listaUsuarios: (values) => {
      dispatch({ type: 'HACER_LISTA_USUARIOS_FOLLOWER_FOLLOW', values })
    },

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    usuariosArray: state.reducerConseguirUsuariosFollowerFollow
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FollowersAndFollows)