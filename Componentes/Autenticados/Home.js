import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'

 
 class Home extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <Text> Home </Text>
        <Button title="Publicacion"
        onPress={()=>this.props.navigation.navigate('Autor')}></Button>

<Button title="Comentarios"
        onPress={()=>this.props.navigation.navigate('Comentarios')}></Button>
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
  });

  export default Home
