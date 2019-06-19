import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';
import Post from '../Post'

export default class PostProfileGrande extends PureComponent {
    componentWillMount(){
     const imagen =   this.props.navigation.getParam('imagen', null);
     const user =   this.props.navigation.getParam('user', null);    
     const editor = this.props.navigation.getParam('editor', false)
     this.setState({imagen:imagen})
     this.setState({usuario:user})
     this.setState({editor: editor})
     
     
    }
  constructor(props) {
    super(props);
    this.state = {
        imagen: null,
        usuario: null,
        editor: false
    };
  }

  render() {
    
    
      
    return (
      <View>
       <Post item={this.state.imagen} editor={this.state.editor} navigation={this.props.navigation} autor={this.state.usuario} />
      </View>
    );
  }
}
