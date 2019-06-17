import CONSTANTES from '../Sagas/Constantes'


export const reducerImagenSeleccionada = (state = { imagenSeleccionada: null }, action) => {
    switch (action.type) {
        case CONSTANTES.IMAGEN_SELECCIONADA:
            return { imagenSeleccionada: action.datos }
        case CONSTANTES.BORRAR_IMAGEN: 
            return { imagenSeleccionada: null }
        default:
            return state
    }
}