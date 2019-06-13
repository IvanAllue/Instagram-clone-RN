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
        console.log(this.props.item);
        
        
        if (this.props.item[2] != null) {
            return (
                <View style={{ height: width * 0.3, flexDirection: "row", marginBottom: 3, justifyContent: "space-between" }}>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[0], user: this.props.usuario, editor: this.props.editor}) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[0].url }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[1], user: this.props.usuario, editor: this.props.editor }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[1].url }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[2], user: this.props.usuario, editor: this.props.editor }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[2].url }} />
                    </TouchableHighlight>
                </View>
            );
        } else if (this.props.item[1] != null) {
            return (
                <View style={{ height: width * 0.3, flexDirection: "row", marginBottom: 3 }}>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[0], user: this.props.usuario, editor: this.props.editor }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3, marginRight: 3 }} source={{ uri: this.props.item[0].url }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[1], user: this.props.usuario, editor: this.props.editor }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[1].url }} />
                    </TouchableHighlight>
                </View>
            );
        } else {
            return (
                <View style={{ height: width * 0.3, flexDirection: "row", marginBottom: 3 }}>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[0], user: this.props.usuario, editor: this.props.editor }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3, marginLeft: 3 }} source={{ uri: this.props.item[0].url }} />
                    </TouchableHighlight>
                </View>
            );

        }



    }
}
