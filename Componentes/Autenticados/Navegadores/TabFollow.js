import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import Follow from '../Follow'
TabFollow = createMaterialTopTabNavigator({
    Siguiendo: {
        screen: Follow
    },
    Tu: {
        screen: Follow
    }
}
)

export default createAppContainer(TabFollow);