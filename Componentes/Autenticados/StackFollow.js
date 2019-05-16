import { createStackNavigator, createAppContainer } from 'react-navigation'
import TabFollow from './TabFollow'
import Post from './Post';
import Autor from './Profile';
import Comentarios from './Comentarios';

console.disableYellowBox = true;

const StackFollow = createStackNavigator({
    TabFollow: {
        screen: TabFollow,
        navigationOptions:{
            header: null
        }
        
    },
    Post: {
        screen: Post
    },
    Autor: {
        screen: Autor
    },
    Comentarios: {
        screen: Comentarios
    }
})

export default createAppContainer(StackFollow);