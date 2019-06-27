import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';
import Post from '../Post'

export default class PostProfileGrande extends PureComponent {
    componentWillMount(){
     const imagen =   this.props.navigation.getParam('imagen', null);
     const user =   this.props.navigation.getParam('user', null);    
     const editor = this.props.navigation.getParam('editor', false)
     const idPost = this.props.navigation.getParam('idPost', false)

      
     this.setState({imagen:imagen})
     this.setState({usuario:user})
     this.setState({editor: editor})
     this.setState({idPost: idPost})

    
     
    }

    async componentDidUpdate(){

      const imagen =   this.props.navigation.getParam('imagen', null);
     const user =   this.props.navigation.getParam('user', null);    
     
     const editor = this.props.navigation.getParam('editor', false)
     const idPost = this.props.navigation.getParam('idPost', false)

      
   await  this.setState({imagen:imagen})
   await  this.setState({usuario:user})
   await  this.setState({editor: editor})
   await  this.setState({idPost: idPost})

     
    }
  constructor(props) {
    super(props);
    this.state = {
        imagen: null,
        usuario: null,
        editor: false,
        idPost: null,
        ruta: null
    };
  }

  render() {
    
    
      
    return (
      <View>
       <Post item={this.state.imagen} editor={this.state.editor} navigation={this.props.navigation} autor={this.state.usuario} idPost={this.state.idPost} />
      </View>
    );
  }
}
