import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home'
import Autor from './Profile'
import Post from './Post'
import Comentarios from './Comentarios'



const StackHome = createStackNavigator({
    HomeComponent: {
        screen: Home,
    },
    Autor: {
        screen: Autor
    },
    Post: {
        screen: Post
    },
    Comentarios: {
        screen: Comentarios,

    }

});






export default createAppContainer(StackHome);