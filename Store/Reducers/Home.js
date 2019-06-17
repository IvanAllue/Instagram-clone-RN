import CONSTANTES from '../Sagas/Constantes'


export const reducerDescargarPublicaciones = (state = null, action) => {

    switch (action.type) {
        case CONSTANTES.OBTENER_PUBLICACIONES:
            return [...action.publicaciones].reverse()
        default:
            return state
    }
}

export const reducerDescargarAutores = (state = null, action) => {

    switch (action.type) {
        case CONSTANTES.OBTENER_AUTORES:
            return [...action.autores].reverse()
        default:
            return state
    }
}



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

export const reducerUsuariosLike = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.PONER_USUARIOS_LIKE:
            
            return [...action.usuariosLike]

        default:
            return state;
    }
}
export const reducerUidsUsuarios = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.CONSEGUIR_UID_LIKES:
            
            return [...action.usuariosId]
        default:
            return state;
    }
}