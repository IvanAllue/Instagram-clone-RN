import React, { PureComponent } from 'react';
import { View, Text, Dimensions, Image, TouchableHighlight } from 'react-native';

var width = Dimensions.get('window').width;

export default class PostProfile extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        
       
        
        if ( this.props.item[2] != null) {
            return (
                <View style={{ height: width * 0.3, flexDirection: "row", marginBottom: 3, justifyContent: "space-between" }}>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[0].publicaciones, user:  JSON.parse(JSON.stringify(this.props.usuario)), editor: this.props.editor, idPost:this.props.item[0].idPublicacion }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[0].publicaciones.url }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[1].publicaciones, user:  JSON.parse(JSON.stringify(this.props.usuario)), editor: this.props.editor, idPost:this.props.item[1].idPublicacion }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[1].publicaciones.url }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[2].publicaciones, user:  JSON.parse(JSON.stringify(this.props.usuario)), editor: this.props.editor, idPost:this.props.item[2].idPublicacion }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[2].publicaciones.url }} />
                    </TouchableHighlight>
                </View>
            );
        } else if ( this.props.item[1] != null) {
            return (
                <View style={{ height: width * 0.3, flexDirection: "row", marginBottom: 3 }}>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[0].publicaciones, user:  JSON.parse(JSON.stringify(this.props.usuario)), editor: this.props.editor, idPost:this.props.item[0].idPublicacion }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3, marginRight: 3 }} source={{ uri: this.props.item[0].publicaciones.url }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[1].publicaciones, user:  JSON.parse(JSON.stringify(this.props.usuario)), editor: this.props.editor, idPost:this.props.item[1].idPublicacion }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[1].publicaciones.url }} />
                    </TouchableHighlight>
                </View>
            );
        } else {
            return (
                <View style={{ height: width * 0.3, flexDirection: "row", marginBottom: 3 }}>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[0].publicaciones, user: JSON.parse(JSON.stringify(this.props.usuario)), editor: this.props.editor, idPost:this.props.item[0].idPublicacion }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3, marginLeft: 3 }} source={{ uri: this.props.item[0].publicaciones.url }} />
                    </TouchableHighlight>
                </View>
            );

        }



    }
}
