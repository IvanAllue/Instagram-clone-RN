import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Add from './Add'
import Foto from './AddComponents/Foto'



const AddTabNavigator = createBottomTabNavigator({
    Galeria: {
        screen: Add
    },
    Foto: {
        screen: Foto
    }
},{    
    tabBarOptions: {
        activeTintColor: '#000',       
        activeBackgroundColor:'#D9D9D9',        
        labelStyle: {            
          fontSize: 20,
          marginBottom: 10
          
        },
        
      }
})

export default createAppContainer(AddTabNavigator);