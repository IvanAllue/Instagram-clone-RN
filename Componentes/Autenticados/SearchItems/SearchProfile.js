import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class SearchProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{ flex: 1, flexDirection: "row", marginTop: 24, alignItems: "center" }}>
                    <View style={{ flex: 1, alignItems: "center" }}>

                        <Ionicons name='ios-arrow-round-back' size={30} />
                    </View>
                    <View style={{ flex: 9, }}>
                        <Text style={{ color: '#A6A6A6', fontSize: 17, padding: 5 }}>Buscar</Text>

                    </View>
                </View>
                <View style={{ flex: 9, backgroundColor: '#454545' }}>

                </View>
                {/* <Button title="Ir a los post"
        onPress={()=>{this.props.navigation.navigate('Post')}}> */}

                {/* </Button> */}
            </View>
        );
    }
}
