import React, { PureComponent } from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'
import { Avatar } from 'react-native-elements';

class FollowersAndFollows extends PureComponent {

  async componentDidUpdate() {

    if (this.props.usuariosArray != null && this.state.render == false) {

      await this.setState({ render: true })

    }
  }
  async componentWillMount() {
    const listaSeguidores = this.props.navigation.getParam('lista', null);
    console.log(listaSeguidores);
    
    await this.setState({ lista: listaSeguidores })

    if (this.state.lista != null) {

      this.props.listaUsuarios(this.state.lista)
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      render: false
    };





  }

  render() {

    if (this.state.render) {
      return (
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
      );
    } else {
      return (
        <View>
          <Text> componentText </Text>
        </View>
      );
    }

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