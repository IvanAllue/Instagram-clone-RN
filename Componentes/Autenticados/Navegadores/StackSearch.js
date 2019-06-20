import { createStackNavigator, createAppContainer } from 'react-navigation'
import Post from '../Post';
import Search from '../Search'
import Profile from '../Profile';
import Comentarios from '../PostItems/Comentarios';
import SearchProfile from '../SearchItems/SearchProfile'
import PostProfileGrande from '../ProfileItems/PostProfileGrande'
import Likes from '../PostItems/Likes'
import FollowersAndFollows from '../ProfileItems/FollowersAndFollows'


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
    },
    PostProfile: {
        screen: PostProfileGrande,
        navigationOptions: () => ({
            headerTitle:'Foto'
            ,
          }),
       
    },Likes:{
        screen: Likes
    },
    FollowersAndFollows: {
        screen: FollowersAndFollows
    }

},
{
    headerMode: 'none'
})

export default createAppContainer(StackSearch);