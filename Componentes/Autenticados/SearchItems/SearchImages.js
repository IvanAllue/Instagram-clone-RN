import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableHighlight, Image } from 'react-native'
var width = Dimensions.get('window').width;

export default class SearchImages extends Component {

    componentWillMount() {
        console.log(this.props.item);
        
    }
    render() {
       
        if (typeof this.props.item[2].publicacion != "undefined") {
            return (
                <View style={{ height: width * 0.3, flexDirection: "row", marginBottom: 3, justifyContent: "space-between" }}>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[0].publicacion, user: this.props.item[0].usuario, editor: this.props.editor, idPost: this.props.item[0].key, }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[0].publicacion.url }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[1].publicacion, user: this.props.item[1].usuario, editor: this.props.editor, idPost: this.props.item[1].key, }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[1].publicacion.url }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[2].publicacion, user: this.props.item[2].usuario, editor: this.props.editor,  idPost: this.props.item[2].key, }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[2].publicacion.url }} />
                    </TouchableHighlight>
                </View>
            );
        } else if (typeof this.props.item[1].publicacion != "undefined") {
            return (
                <View style={{ height: width * 0.3, flexDirection: "row", marginBottom: 3 }}>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[0].publicacion, user: this.props.item[0].usuario, editor: this.props.editor, idPost: this.props.item[0].key, }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3, marginRight: 3 }} source={{ uri: this.props.item[0].publicacion.url }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[1].publicacion, user: this.props.item[1].usuario, editor: this.props.editor, idPost: this.props.item[1].key, }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[1].publicacion.url }} />
                    </TouchableHighlight>
                </View>
            );
        } else {
            return (
                <View style={{ height: width * 0.3, flexDirection: "row", marginBottom: 3 }}>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[0].publicacion, user: this.props.item[0].usuario, editor: this.props.editor, idPost: this.props.item[0].key, }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[0].publicacion.url }} />
                    </TouchableHighlight>
                </View>
            );

        }
    }
   

}
