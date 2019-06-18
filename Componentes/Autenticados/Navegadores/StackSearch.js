import { createStackNavigator, createAppContainer } from 'react-navigation'
import Post from '../Post';
import Search from '../Search'
import Profile from '../Profile';
import Comentarios from '../PostItems/Comentarios';
import SearchProfile from '../SearchItems/SearchProfile'

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
    },
    SearchProfile: {
        screen:SearchProfile
    }
},
{
    headerMode: 'none'
})

export default createAppContainer(StackSearch);