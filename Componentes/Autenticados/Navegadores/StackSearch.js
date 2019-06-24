import { createStackNavigator, createAppContainer } from 'react-navigation'
import Post from '../Post';
import Search from '../Search'
import Profile from '../Profile';
import Comentarios from '../PostItems/Comentarios';
import SearchProfile from '../SearchItems/SearchProfile'
import PostProfileGrande from '../PostItems/PostGrande'
import Likes from '../PostItems/Likes'
import FollowersAndFollows from '../ProfileItems/FollowersAndFollows'


const StackSearch = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions:{
            header: null
        }
    },
    Post: {
        screen: Post,
        navigationOptions: () => ({
            headerTitle:'Explorar'
            ,
          }),
    },
    Autor: {
        screen: Profile
    },
    Comentarios: {
        screen: Comentarios,
        navigationOptions: () => ({
            headerTitle:'Comentarios'
            ,
          }),
        
    },
    SearchProfile: {
        screen:SearchProfile
    },
    PostProfile: {
        screen: PostProfileGrande,
        navigationOptions: () => ({
            headerTitle:'Explorar'
            ,
          }),
       
    },Likes:{
        screen: Likes,
        navigationOptions: () => ({
            headerTitle:'Me gusta'
            ,
          }),
    },
    FollowersAndFollows: {
        screen: FollowersAndFollows
    }

},
{
   
})

export default createAppContainer(StackSearch);