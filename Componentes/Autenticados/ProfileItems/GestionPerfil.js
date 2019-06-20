import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'
import { Avatar } from 'react-native-elements'

class GestionPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seguidores: this.props.user.contFollowers,
            seguidos: this.props.user.contFollows,
            permitido: true
        };
    }

    componentDidMount() {

        for (i in JSON.parse(JSON.stringify(this.props.datosUsuario.datosUser)).follow) {
            if (i == this.props.uid) {
                this.setState({ permitido: false })
            }

        }


    }

    render() {
        let { image } = this.props.imagen

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
                                        this.props.foto,
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
                                    {this.props.publicaciones}
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
                                <TouchableHighlight onPress={() => {
                                    this.props.limpiarUsuarioImagenes()
                                    this.props.navigation.navigate('FollowersAndFollows', { lista: this.props.user.followers })
                                }}>
                                    <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold", marginTop: 5 }}>
                                        {this.state.seguidores}
                                    </Text>
                                </TouchableHighlight>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableHighlight onPress={() => {
                                    this.props.limpiarUsuarioImagenes()
                                    this.props.navigation.navigate('FollowersAndFollows', { lista: this.props.user.followers })
                                }}>
                                    <Text style={{ textAlign: "center", fontSize: 14, color: '#808080' }}>
                                        Seguidores
                                     </Text>
                                </TouchableHighlight>
                            </View>
                        </View>

                        <View style={{ flex: 5 }}>
                            <View style={{ flex: 1 }}>
                                <TouchableHighlight onPress={() => {
                                    this.props.limpiarUsuarioImagenes()
                                    this.props.navigation.navigate('FollowersAndFollows', { lista: this.props.user.follow })
                                }}>
                                    <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold", marginTop: 5 }}>
                                        {this.state.seguidos}
                                    </Text>
                                </TouchableHighlight>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableHighlight onPress={() => {
                                    this.props.limpiarUsuarioImagenes()
                                    this.props.navigation.navigate('FollowersAndFollows', { lista: this.props.user.follow })
                                }}>
                                    <Text style={{ textAlign: "center", fontSize: 14, color: '#808080' }}>
                                        Seguidos
                                      </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.props.editor ?
                            <TouchableOpacity style={styles.button}
                                onPress={this.props.editar}>
                                <Text style={{ textAlign: 'center' }}>Editar perfil</Text>
                            </TouchableOpacity>
                            :
                            this.state.permitido ?
                                <TouchableOpacity style={styles.buttonSeguir}
                                    onPress={
                                        () => {
                                            this.setState({ seguidores: this.state.seguidores + 1, permitido: false })
                                            this.props.seguirUsuario({ uid: this.props.uid, user: this.props.user })

                                        }
                                    }>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: "bold" }}>Seguir</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={styles.buttonSeguir}
                                    onPress={
                                        () => {
                                            this.setState({ seguidores: this.state.seguidores - 1, permitido: true })

                                            this.props.dejarDeSeguir({ uid: this.props.uid, user: this.props.user })
                                        }
                                    }>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: "bold" }}>Dejar de seguir</Text>
                                </TouchableOpacity>
                        }
                    </View>
                </View>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',

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
        imagen: state.reducerImagenPerfil,
        datosUsuario: state.reducerDatosProfile,

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        seguirUsuario: (values) => {
            dispatch({ type: 'SEGUIR_USUARIO', values })
        },
        dejarDeSeguir: (values) => {
            dispatch({ type: 'DEJAR_SEGUIR_USUARIO', values })

        },
        limpiarUsuarioImagenes: () => {
            dispatch({ type: 'LIMPIAR_PUBLICACIONES_PERFIL_AJENO' })

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GestionPerfil)
