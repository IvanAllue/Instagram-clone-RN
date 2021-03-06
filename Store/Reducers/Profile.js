import CONSTANTES from '../Sagas/Constantes'

export const reducerPublicacaionesPerfilAjeno = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.PUBLICACIONES_PERFIL_AJENO:
            
            return [...action.arrayPublicaciones].reverse();
        case CONSTANTES.LIMPIAR_PUBLICACIONES_PERFIL_AJENO: 
        return null
        default:
            return state;
    }
}

export const reducerPublicacaionesPerfil = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.PUBLICACIONES_PERFIL:
            
            return [...action.arrayPublicaciones].reverse();

        default:
            return state;
    }
}



export const reducerConseguirUsuariosFollowerFollow = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.GUARDAR_STORE_LISTA_FOLLOWER_FOLOW:
          
            
            return action.arrayUsuarios
            case CONSTANTES.LIMPIAR_LISTA_USUARIOS_FOLLOWER_FOLLOW:
                return null
        
        default:
            return state;
    }
}







export const reducerImagenPerfil = (state = { imagen: null }, action) => {
    switch (action.type) {
        case CONSTANTES.ESTABLECER_IMAGEN_PERFIL:
            return { imagen: action.imagen }
        case CONSTANTES.LIMPIAR_IMAGEN_PERFIL:
            return { imagen: null }
        default:
            return state;
    }
}