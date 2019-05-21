import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as form} from 'redux-form'
const reducerPrueba = (state = [0] , action) => {
    switch (action.type) {
        case 'AUMENTAR_REDUCERPRUEBA':
            return [...state, 1];
            
    
        default:
            return state;
    }
}


const miMiddleware = (store) => (next) => (action) => {
   // console.log(action)
    next(action)
}

const reducers = combineReducers({
    //reducerPrueba: reducerPrueba
     reducerPrueba,
     form,
})

const store = createStore(reducers, applyMiddleware(miMiddleware))

export default store