import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Avatar } from 'react-native-elements';

import { connect } from 'react-redux'

 class Comentario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comentario: null
        };

    }
    async componentWillMount() {
     await   this.setState({ comentario: JSON.parse(JSON.stringify(this.props.item)) })
    
    }

    render() {
       
        return (
            <View style={{ height: 50, flexDirection: "row", marginBottom: 5 }}>
                <View style={{ flex: 2, alignItems: "center" }}>

                    <Avatar size={40} rounded source={{ uri: this.state.comentario.fotoPerfil }} onPress={()=>{
                        this.props.limpiarUsuarioImagenes()
                        this.props.navigation.navigate('AutorProfile', { uid: this.state.comentario.autorId })}}/>

                </View>
                <View style={{ flex: 8 }}>
                    <TouchableHighlight onPress={() => { 
                        this.props.limpiarUsuarioImagenes()
                        this.props.navigation.navigate('AutorProfile', { uid: this.state.comentario.autorId }) }}>
                        <Text>
                            <Text style={{ fontWeight: "bold" }}> {this.state.comentario.nombreUsuario} </Text> {this.state.comentario.contenido}  </Text>
                    </TouchableHighlight>
                </View>
            </View >
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        limpiarUsuarioImagenes: () => {
            dispatch({ type: 'LIMPIAR_PUBLICACIONES_PERFIL_AJENO' })
      
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comentario)