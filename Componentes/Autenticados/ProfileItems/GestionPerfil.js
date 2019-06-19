import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux'
import { Avatar } from 'react-native-elements'

class GestionPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seguidores: this.props.user.contFollowers,
            seguidos: this.props.user.contFollows
        };
    }

    componentWillMount(){
       console.log(this.props);
       
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
                                <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold", marginTop: 5 }}>
                                    {this.state.seguidores}
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
                                    {this.state.seguidos}
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
                        {this.props.editor ?
                            <TouchableOpacity style={styles.button}
                                onPress={this.props.editar}>
                                <Text style={{ textAlign: 'center' }}>Editar perfil</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.buttonSeguir}
                                onPress={
                                   ()=>{ this.props.seguirUsuario({uid: this.props.uid, user: this.props.user})}
                                }>
                                <Text style={{ textAlign: 'center', color: '#fff', fontWeight: "bold" }}>Seguir</Text>
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
        imagen: state.reducerImagenPerfil
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        seguirUsuario: (values) => {
            dispatch({type: 'SEGUIR_USUARIO', values})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GestionPerfil)
