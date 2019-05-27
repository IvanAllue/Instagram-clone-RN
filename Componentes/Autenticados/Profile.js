import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native'
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import GestionPerfil from './ProfileItems/GestionPerfil'

class Profile extends Component {

  irEditarPerfil = (values) =>{
   
    this.props.navigation.navigate('EditarPerfil')
  }

  render() {
    return (
      <View style={styles.container}>

        <Header
          backgroundColor="#FFF"
          statusBarProps={{ barStyle: 'dark-content', translucent: true }}
          outerContainerStyles={{
            borderBottomColor: '#85106a',
            borderBottomWidth: 0.5,
          }}
          rightComponent={
            <TouchableOpacity onPress={() => { this.props.navigation.toggleDrawer() }}>
              <Ionicons name='md-menu' size={30} />
            </TouchableOpacity>
          }
        />
        <View style={{ borderTopColor: '#D6D6D6', borderTopWidth: 1, width: width }}>

          <View style={{height: height * 0.2}}>
            <GestionPerfil editar={this.irEditarPerfil}/>

          </View>




          <Button title="Post"
            onPress={() => this.props.navigation.navigate('EditarPerfil')}></Button>

        </View>





      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
export default Profile;