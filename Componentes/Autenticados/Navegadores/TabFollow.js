import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import Follow from '../Follow'
TabFollow = createMaterialTopTabNavigator({
    Follow: {
        screen: Follow
    },
    Followers: {
        screen: Follow
    }
}
)

export default createAppContainer(TabFollow);