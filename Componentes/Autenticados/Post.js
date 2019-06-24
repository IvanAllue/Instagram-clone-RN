import React, { Component } from 'react'
import { Text, View, Button, Dimensions, Image, TouchableHighlight } from 'react-native'
import { Avatar } from 'react-native-elements';
// import DoubleClick from 'react-native-double-click';
import { connect } from 'react-redux'

import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

var width = Dimensions.get('window').width;


class Post extends Component {
  
 async componentWillMount() {
  
    cont = 0
    for (let i in this.props.item.likes) {
      if (i == this.props.usuario.user.uid) {
        this.setState({ like: true })
      }
      cont++
    }
    await this.setState({ contLike: cont })
    
    if ( this.props.idPost != undefined ){
     await this.setState({idPublicacion: this.props.idPost})
    }else{
      await this.setState({idPublicacion:this.props.item.key})
    }

    
    
  }

  async cambiarEstado() {
    await this.setState({ like: !this.state.like })
    if (this.state.like) {
      
      this.props.darLike({ uid: this.state.idPublicacion })
      this.setState({ contLike: this.state.contLike + 1 })
    } else {
      this.props.quitarLike({ uid: this.state.idPublicacion })
      this.setState({ contLike: this.state.contLike - 1 })
    }
  }
  state = {
    like: false,
    contLike: 0,
autor: null,
idPublicacion: null
  }

  render() {
   
   
    return (
      <View>
        {this.props.editor &&
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
              <Text style={{ fontSize: 18, marginLeft: - width * 0.35 }}>Foto</Text>
            }

          />
        }
        <View style={{ height: 50, flexDirection: "row", borderBottomColor: '#808080', borderBottomWidth: 0.2, marginBottom: 1 }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Avatar
              size={30}
              rounded
              source={{
                uri: this.props.autor.fotoPerfil
              }}
            />
          </View>
          <View style={{ flex: 6, justifyContent: "center" }}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('AutorProfile', { uid: this.props.item.uid })}>
              <Text style={{ fontWeight: "bold" }}>{this.props.autor.usuario}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <Image style={{ width: width, height: width, borderTopWidth: 0.2 }} source={{ uri: this.props.item.url }} />

        <View style={{ height: 50, flexDirection: "row" }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>



            <TouchableHighlight onPress={() => { this.cambiarEstado() }}>
              {this.state.like ? <Ionicons name='ios-heart' size={30} color='#F82910' />
                :
                <Ionicons name='ios-heart-empty' size={30} />

              }
            </TouchableHighlight>

          </View>


          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Ionicons name='ios-chatbubbles' size={30} onPress={() => this.props.navigation.navigate('Comentarios', {autor: this.props.autor, publicacion: this.props.item, usuario: this.props.usuario,  idPost: this.state.idPublicacion})} />

          </View>

          <View style={{ flex: 6 }}></View>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{
          console.log(this.state.idPublicacion)
          this.props.navigation.navigate('Likes', { uid:this.state.idPublicacion})}}>
        <Text style={{marginLeft: width*0.1, fontWeight: "bold"}}>Le gusta a {this.state.contLike} personas</Text>

        </TouchableHighlight>
        </View>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Comentarios', {autor: this.props.autor, publicacion: this.props.item, idPost: this.state.idPublicacion })}>
          <Text>{this.props.item.texto}</Text>
        </TouchableHighlight>       
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    usuario: state.reducerSesion
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    darLike: (values) => {
      dispatch({ type: 'DAR_LIKE', datos: values })
    },
    quitarLike: (values) => {
      dispatch({ type: 'QUITAR_LIKE', datos: values })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)