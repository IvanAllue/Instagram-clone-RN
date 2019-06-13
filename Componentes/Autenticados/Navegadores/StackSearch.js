import { createStackNavigator, createAppContainer } from 'react-navigation'
import Post from '../Post';
import Search from '../Search'
import Profile from '../Profile';
import Comentarios from '../PostItems/Comentarios';

const StackSearch = createStackNavigator({
    Search: {
        screen: Search
    },
    Post: {
        screen: Post
    },
    Autor: {
        screen: Profile
    },
    Comentarios: {
        screen: Comentarios
    }
},
{
    headerMode: 'none'
})

export default createAppContainer(StackSearch);