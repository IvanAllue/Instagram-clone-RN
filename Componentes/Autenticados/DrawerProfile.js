import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import { Dimensions } from 'react-native'

import DrawerComponent from './DrawerMenu/DrawerComponent'
import Profile from './Profile'
import Configuracion from './DrawerMenu/Configuracion'
import EditarPerfil from './DrawerMenu/EditarPerfil'

var width = Dimensions.get('window').width 
const DrawerNavigator = createDrawerNavigator({
    Profile: {
        screen: Profile,
    },
    Configuracion: {
        screen: Configuracion
    },
    EditarPerfil:{
        screen: EditarPerfil
    }
},{
    drawerType: 'slide',
    contentComponent: DrawerComponent,
    drawerPosition: 'right',
    drawerWidth: width * 0.60
},)

export default createAppContainer(DrawerNavigator)