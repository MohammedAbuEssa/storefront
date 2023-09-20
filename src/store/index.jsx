import {combineReducers,createStore,applyMiddleware} from 'redux'
import storeState from './storeState'
import ShoppingListState from './ShoppingListState'
import thunkMiddleware from '../middleware/thunk'

let reducers = combineReducers({
    storeState:storeState,
    ShoppingListState:ShoppingListState
})

const store = ()=>{
    return createStore(reducers,applyMiddleware(thunkMiddleware))
}
export default store();