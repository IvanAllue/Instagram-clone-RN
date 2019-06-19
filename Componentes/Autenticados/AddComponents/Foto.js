import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, TouchableHighlight, Dimensions, Image } from 'react-native'
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'


var width = Dimensions.get('window').width;

import { ImagePicker, Permissions } from 'expo';

class Foto extends Component {
    state = {
        image: null,
    };
    _pickImage = async () => {
        
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 4],
        });



        if (!result.cancelled) {
            await this.setState({ image: result.uri });
            await this.props.imagenSeleccionada(result.uri)

            //this.props.cargarImagen(result)
        }
    };


    async componentWillMount() {
        await Permissions.askAsync(Permissions.CAMERA);
        await Permissions.askAsync(Permissions.CAMERA_ROLL);

        this._pickImage()
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     };
    // }

    render() {
        let { image } = this.state;
       
        return (
            <View style={styles.container}>
                <Header
                    backgroundColor="#FFF"
                    statusBarProps={{ barStyle: 'dark-content', translucent: true }}
                    outerContainerStyles={{
                        borderBottomColor: '#85106a',
                        borderBottomWidth: 0.5,
                    }}
                    leftComponent={
                        <TouchableOpacity onPress={() => {   this.props.navigation.navigate('Home') }}>
                            <Ionicons name='md-close' size={35} />
                        </TouchableOpacity>
                    }
                   
                    rightComponent={
                     image &&
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('NuevaPublicacion')  }}>
                            <Text style={{fontSize: 20, color: '#0077CC', marginLeft: -15
                            }}> Siguiente </Text>
                        </TouchableOpacity>
                    }
                />
                <View style={{
                    flex: 1, alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {image &&
                        <Image source={{ uri: image }} style={{ width: width, height: width }} />}
                </View>
                <TouchableOpacity style={styles.btnCamara}
                    onPress={() => {
                        this._pickImage()
                    }}
                >
                   
                </TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },

    btnCamara: {
        borderColor: '#BFBFBF',
        borderWidth: 15,
        padding: 25,
        borderRadius: 90,
        alignItems: 'center',
        marginBottom: 30,

    },
    
    btnFacebook: {
        marginTop: 40
    }

});

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        imagenSeleccionada: (values) => {
            dispatch({ type: 'IMAGEN_SELECCIONADA', datos: values })
          },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Foto)