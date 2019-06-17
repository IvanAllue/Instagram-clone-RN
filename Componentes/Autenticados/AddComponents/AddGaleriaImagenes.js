import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableHighlight } from 'react-native';
var width = Dimensions.get('window').width;

export default class AddGaleriaImagenes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      

    }

    render() {
        if (this.props.item[3] != null) {
            return (
            <View style={{ height: width * 0.25, flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableHighlight onPress={() => { this.props.listener(this.props.item[0].node.image.uri) }}>
                    <Image style={{ width: width * 0.25, height: width *  0.25 }} source={{ uri: this.props.item[0].node.image.uri }} />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { this.props.listener(this.props.item[1].node.image.uri) }}>
                    <Image style={{ width: width * 0.25, height: width * 0.25 }} source={{ uri: this.props.item[1].node.image.uri }} />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { this.props.listener(this.props.item[2].node.image.uri) }}>
                    <Image style={{ width: width * 0.25, height: width * 0.25 }} source={{ uri: this.props.item[2].node.image.uri }} />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { this.props.listener(this.props.item[3].node.image.uri) }}>
                    <Image style={{ width: width * 0.25, height: width * 0.25 }} source={{ uri: this.props.item[3].node.image.uri }} />
                </TouchableHighlight>
            </View>
            )
        }
        else if (this.props.item[2] != null) {
            return (
                <View style={{ height: width * 0.25, flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableHighlight onPress={() => { this.props.listener(this.props.item[0].node.image.uri) }}>
                        <Image style={{ width: width * 0.25, height: width * 0.25 }} source={{ uri: this.props.item[0].node.image.uri }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.listener(this.props.item[1].node.image.uri) }}>
                        <Image style={{ width: width * 0.25, height: width * 0.25 }} source={{ uri: this.props.item[1].node.image.uri }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.listener(this.props.item[2].node.image.uri) }}>
                        <Image style={{ width: width * 0.25, height: width * 0.25 }} source={{ uri: this.props.item[2].node.image.uri }} />
                    </TouchableHighlight>
                </View>
            );
        } else if (this.props.item[1] != null) {
            return (
                <View style={{ height: width * 0.25, flexDirection: "row", }}>
                    <TouchableHighlight onPress={() => { this.props.listener(this.props.item[0].node.image.uri) }}>
                        <Image style={{ width: width * 0.25, height: width * 0.25 }} source={{ uri: this.props.item[0].node.image.uri }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.listener(this.props.item[1].node.image.uri) }}>
                        <Image style={{ width: width * 0.25, height: width * 0.25 }} source={{ uri: this.props.item[1].node.image.uri }} />
                    </TouchableHighlight>
                </View>
            );
        } else {
            return (
                <View style={{ height: width * 0.25, flexDirection: "row",}}>
                    <TouchableHighlight onPress={() => { this.props.listener(this.props.item[0].node.image.uri) }}>
                        <Image style={{ width: width * 0.25, height: width * 0.25, }} source={{ uri: this.props.item[0].node.image.uri }} />
                    </TouchableHighlight>
                </View>
            );

        }
    }
}
