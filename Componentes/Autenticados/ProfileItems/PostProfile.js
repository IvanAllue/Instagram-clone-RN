import React, { PureComponent } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

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
                    <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[0].url }} />
                    <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[1].url }} />
                    <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[2].url }} />
                </View>
            );
        } else if (this.props.item[1] != null) {
            return (
                <View style={{ height: width * 0.3, flexDirection: "row", marginBottom: 3 }}>
                    <Image style={{ width: width * 0.33, height: width * 0.3, marginRight: 3 }} source={{ uri: this.props.item[0].url }} />
                    <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[1].url }} />
                </View>
            );
        } else {
            return (
                <View style={{ height: width * 0.3, flexDirection: "row", marginBottom: 3 }}>
                    <Image style={{ width: width * 0.33, height: width * 0.3, marginLeft: 3 }} source={{ uri: this.props.item[0].url }} />
                </View>
            );

        }



    }
}
