import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet , Dimensions} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

var width = Dimensions.get('window').width*0.60;

export default class DrawerComponent extends Component {
    render() {
        return ( 
            <View style={styles.container}>
                 <View style={{
                    flex: 1, alignItems: 'center',
                    justifyContent: 'center',
                }}>
                </View>


                <TouchableOpacity
                    onPress={() => {this.props.navigation.navigate('Configuracion') }}
                    underlayColor="white"
                    style={styles.boton}
                >
                    <View>
                        <Text style={{fontSize: 17,}}> <Ionicons name='ios-cog' size={22} />  Configuración</Text>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    boton: {
        width: width,
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        borderTopColor: '#000',
        borderTopWidth: 0.5,

    }
});
