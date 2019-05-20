import { createStore, combineReducers } from 'redux'
import { reducer as form} from 'redux-form'
const reducerPrueba = (state = [0] , action) => {
    switch (action.type) {
        case 'AUMENTAR_REDUCERPRUEBA':
            return [...state, 1];
            
    
        default:
            return state;
    }
}


const reducers = combineReducers({
    //reducerPrueba: reducerPrueba
     reducerPrueba,
     form,
})

const store = createStore(reducers)

export default store