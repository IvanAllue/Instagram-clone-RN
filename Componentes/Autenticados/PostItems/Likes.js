import React, { PureComponent } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux'
import { Avatar } from 'react-native-elements';

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
      usuarios:null
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
          <FlatList data={this.props.usuarios}
            renderItem={({ item, index }) =>
              {
                console.log(index)
                return(
                  <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('AutorProfile', { uid: this.props.userUids[index] })}}>
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
