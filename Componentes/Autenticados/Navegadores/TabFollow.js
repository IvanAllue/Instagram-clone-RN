import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import Follow from '../Follow'
TabFollow = createMaterialTopTabNavigator({
    Siguiendo: {
        screen: Follow,
        
    },
    Tu: {
        screen: Follow
    }
}, {
    tabBarOptions: {
        style: {
           paddingTop: 30,
           backgroundColor: '#FFF',
           
        },
        activeTintColor: '#000',
        inactiveTintColor: '#808080',
        labelStyle: {
            fontWeight: "bold",
            fontSize: 17
        }
        
    }
}
)

export default createAppContainer(TabFollow);