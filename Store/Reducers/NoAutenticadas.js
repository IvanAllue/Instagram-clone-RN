import CONSTANTES from '../Sagas/Constantes'


export const reducerErrorLogin = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.ERROR_EN_LOGIN:
            
            return action.error
        default:
            return state;
    }
}

export const reducerErrorSignup = (state = null, action) => {
    switch (action.type) {
        case CONSTANTES.ERROR_EN_SIGNUP:
            
            
            return action.error
        default:
            return state;
    }
}