import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import StackHome from './StackHome'
import  StackSearch  from './StackSearch'
import Add from './Add'
import StackFollow from './StackFollow'
import Profile from './Profile'


const RutasAutenticadas = createBottomTabNavigator({
    Home: {
        screen: StackHome,   
        navigationOptions:({ navigation }) => {
            let { routeName } = navigation.state.routes[navigation.state.index]
            
            let navigationOptions = {}
            if (routeName === 'Comentarios') {
                navigationOptions.tabBarVisible = false;
            }
            return navigationOptions
        }                    
    },
    Search:{
        screen: StackSearch,
        navigationOptions:({ navigation }) => {
            let { routeName } = navigation.state.routes[navigation.state.index]
            
            let navigationOptions = {}
            if (routeName === 'Comentarios') {
                navigationOptions.tabBarVisible = false;
            }
            return navigationOptions
        }                 
    },
    Add:{
        screen: Add
    },
    Follow:{
        screen: StackFollow,
        navigationOptions:({ navigation }) => {
            let { routeName } = navigation.state.routes[navigation.state.index]
            
            let navigationOptions = {}
            if (routeName === 'Comentarios') {
                navigationOptions.tabBarVisible = false;
            }
            return navigationOptions
        }                 
    },
    Profile: {
        screen: Profile
    }
})
export default createAppContainer(RutasAutenticadas);