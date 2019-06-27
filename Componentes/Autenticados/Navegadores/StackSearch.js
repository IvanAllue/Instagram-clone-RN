import { createStackNavigator, createAppContainer } from 'react-navigation'
import Post from '../Post';
import Search from '../Search'
import Profile from '../ProfileItems/PerfilAjeno';
import Comentarios from '../PostItems/Comentarios';
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
    
    
    PostProfile: {
        screen: PostGrande,
        navigationOptions: () => ({
            headerTitle:'Explorar'
            ,
          }),
       
    },Likes:{
        screen: Likes,
        navigationOptions:{
            header: null
        }
    },
    FollowersAndFollows: {
        screen: FollowersAndFollows
    }

},
{
   
})

export default createAppContainer(StackSearch);