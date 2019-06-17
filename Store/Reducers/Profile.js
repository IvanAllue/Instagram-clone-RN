import CONSTANTES from '../Sagas/Constantes'

export const reducerPublicacaionesPerfilAjeno = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.PUBLICACIONES_PERFIL_AJENO:
            
            return [...action.publicacionesPerfil].reverse();
        case CONSTANTES.LIMPIAR_PUBLICACIONES_PERFIL_AJENO: 
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