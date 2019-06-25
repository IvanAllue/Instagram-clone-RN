import { createStackNavigator, createAppContainer } from 'react-navigation'
import Post from '../Post';
import Search from '../Search'
import Profile from '../ProfileItems/PerfilAjeno';
import Comentarios from '../PostItems/Comentarios';
import SearchProfile from '../SearchItems/SearchProfile'
import PostGrande from '../PostItems/PostGrande'
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
    AutorProfile: {
        screen: Profile,
        navigationOptions:{
            header: null
        }
    },
    Comentarios: {
        screen: Comentarios,
        navigationOptions: () => ({
            headerTitle:'Comentarios'
            ,
          }),
        
    },
    SearchProfile: {
        screen:SearchProfile,
        navigationOptions:{
            header: null
        }
    },
    PostProfile: {
        screen: PostGrande,
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