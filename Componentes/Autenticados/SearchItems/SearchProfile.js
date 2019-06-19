import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight, TextInput, FlatList, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
var width = Dimensions.get('window').width;

class SearchProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: "row", marginTop: 24, alignItems: "center" }}>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <TouchableHighlight onPress={() => { this.props.navigation.goBack() }}>
                            <Ionicons name='ios-arrow-round-back' size={30} />

                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 9, }}>
                        <TextInput
                            placeholder='Busca'
                            onChangeText={texto => this.props.enviarTextoBuscar(texto)}
                        />
                    </View>
                </View>
                <View style={{ flex: 9, backgroundColor: '#454545' }}>
                    {this.props.usuariosBuscar != null &&
                        <FlatList data={this.props.usuariosBuscar}
                          
                            renderItem={({ item }) =>
                               <View style={{borderTopWidth: 0.2}}>
                                    <TouchableHighlight onPress={()=>{this.props.navigation.navigate('AutorProfile', { uid: item.datos.uid })}}>
                                    <Text style={{backgroundColor: '#fff', width: width, paddingTop: 15, paddingBottom: 15, paddingLeft: 20}}>{item.nombre}</Text>
                                    </TouchableHighlight>
                               </View>
                            }
                        />
                    }

                </View>
                {/* <Button title="Ir a los post"
        onPress={()=>{this.props.navigation.navigate('Post')}}> */}

                {/* </Button> */}
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        usuariosBuscar: state.reducerUsuariosBuscados
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        enviarTextoBuscar: (values) => {
            dispatch({ type: 'SAGA_BUSCAR_USUARIO_NOMBRE', datos: values })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProfile)
