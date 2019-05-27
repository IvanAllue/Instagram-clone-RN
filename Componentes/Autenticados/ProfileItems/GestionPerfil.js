import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GestionPerfil = (props) => {

    return (
        <View style={styles.container}>
            <View style={{ flex: 4, backgroundColor: '#646484' }}>
                <Text>qqq</Text>
            </View>
            <View style={{ flex: 7, backgroundColor: '#fff' }}>
                <View style={{ flex: 1 }}>
                    <Text>qaz</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.button}
                        onPress={props.editar}>
                        <Text style={{ textAlign: 'center' }}>Editar perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    button: {
        borderColor: '#BFBFBF',
        borderWidth: 1.5,
        padding: 5,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
    }
});

export default GestionPerfil