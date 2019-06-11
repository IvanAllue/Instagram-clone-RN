import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { Avatar } from 'react-native-elements';

const GestionPerfil = (props) => {
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
    let { image } = props.imagen

    if (props.imagen.imagen != null) {
        image = props.imagen.imagen
    }


    return (
        <View style={styles.container}>
            <View style={{ flex: 3, justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', }}>
                    {image ?
                        <Avatar
                            size={100}
                            rounded
                            source={{
                                uri: image.uri
                            }}
                        />
                        :

                        <Avatar
                            size={100}
                            rounded
                            source={{
                                uri:
                                    props.foto,
                            }}
                        />
                    }

                </View>
            </View>
            <View style={{ flex: 7, backgroundColor: '#fff' }}>
                <View style={{ flex: 1 }}>
                    <Text>qaz</Text>
                </View>
                <View style={{ flex: 1 }}>
                    {props.editor &&
                        <TouchableOpacity style={styles.button}
                            onPress={props.editar}>
                            <Text style={{ textAlign: 'center' }}>Editar perfil</Text>
                        </TouchableOpacity>
                    }
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

const mapStateToProps = (state, ownProps) => {
    return {
        imagen: state.reducerImagenPerfil
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GestionPerfil)
