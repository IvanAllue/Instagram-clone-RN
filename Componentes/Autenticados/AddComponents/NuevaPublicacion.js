import React, { PureComponent } from 'react'
import { Text, View, ImageEditor, Image, TouchableHighlight, Dimensions, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

var width = Dimensions.get('window').width;

class NuevaPublicacion extends PureComponent {
    render() {
        return (
            <View>
                <Header
                    backgroundColor="#FFF"
                    statusBarProps={{ barStyle: 'dark-content', translucent: true }}
                    outerContainerStyles={{
                        borderBottomColor: '#85106a',
                        borderBottomWidth: 0.5,
                    }}
                    leftComponent={
                        <TouchableHighlight onPress={() => { this.props.navigation.goBack() }}>
                            <Ionicons name='ios-arrow-round-back' size={40} />
                        </TouchableHighlight>
                    }
                    centerComponent={
                        <Text style={{ marginLeft: - width * 0.35, fontSize: 19 }}>Publicación nueva</Text>
                    }

                    rightComponent={
                        <TouchableHighlight onPress={() => { this.props.navigation.navigate('NuevaPublicacion') }}>
                            <Text style={{ color: '#0077CC', fontSize: 18, marginLeft: -10 }}> Compartir </Text>
                        </TouchableHighlight>
                    }
                />

                <View style={{ height: 90, borderBottomColor: '#A6A6A6', borderBottomWidth: 0.2, borderTopColor: '#D6D6D6', borderTopWidth: 0.8, flexDirection:"row" }}>
                    <View style={{flex:2,  marginLeft: 10,  justifyContent: "center",}}>
                        {/* <Image source={{ uri: this.props.imagen.imagenSeleccionada }} style={{ width: 50, height: 50 }}></Image> */}
                        <Image source={{ uri: 'content://media/external/images/media/74' }} style={{ width: 70, height: 70 }}></Image>
                    </View>
                    <View style={{flex:8,  justifyContent: "center",}}>
                        <TextInput placeholder="Escribe un pie de foto..." />

                    </View>


                </View>


            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        imagen: state.reducerImagenSeleccionada
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(actionCreator)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NuevaPublicacion)
