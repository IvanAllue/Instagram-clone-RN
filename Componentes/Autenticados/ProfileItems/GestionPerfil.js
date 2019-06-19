import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux'
import { Avatar } from 'react-native-elements';

const GestionPerfil = (props) => {
    seguidores = 0
    seguidos = 0
    let { image } = props.imagen

    if (props.imagen.imagen != null) {
        image = props.imagen.imagen
    }
    if (typeof props.user.seguidores == 'undefined') {
    }
    if (typeof props.user.seguidores != 'undefined') {

    }

    console.log('====================================');
    console.log(props);
    console.log('====================================');

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
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 5, flexDirection: "column" }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold", marginTop: 5 }}>
                                {props.publicaciones}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: "center", fontSize: 14, color: '#808080' }}>
                                Publicaciones
                        </Text>
                        </View>
                    </View>
                    <View style={{ flex: 5, flexDirection: "column" }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold", marginTop: 5 }}>
                                {seguidores}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: "center", fontSize: 14, color: '#808080' }}>
                                Seguidores
                        </Text>
                        </View>
                    </View>

                    <View style={{ flex: 5 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold", marginTop: 5 }}>
                                {seguidos}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: "center", fontSize: 14, color: '#808080' }}>
                                Seguidos
                        </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    {props.editor ?
                        <TouchableOpacity style={styles.button}
                            onPress={props.editar}>
                            <Text style={{ textAlign: 'center' }}>Editar perfil</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.buttonSeguir}
                            onPress={props.editar}>
                            <Text style={{ textAlign: 'center', color: '#fff', fontWeight: "bold" }}>Seguir</Text>
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
    },
    buttonSeguir: {
        backgroundColor: '#2296F3',
        marginRight: 5,
        borderRadius: 5,
        padding: 5,

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
