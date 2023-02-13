import {createStore,compose,applyMiddleware,combineReducers} from 'redux'
import cartReducer from './reducers/index'
import thunk from 'redux-thunk'
import throttle from 'lodash.throttle'


function LoadLocalStorageToState() {
    try {
        const state = localStorage.getItem('cart')
        if (state !== null) {
            JSON.parse(state)
        }
        return {
            cart : []
        }
    }
    catch (e) {
        console.log(e)
    }
}
const ComReducer = combineReducers({
    cart : cartReducer
})
function SaveLocalStorageToState(state) {
    try {
    localStorage.setItem('cart',JSON.stringify(state))
    }
    catch(e) {
        console.log(e)
    }
}
const store = createStore(ComReducer,LoadLocalStorageToState(),compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
store.subscribe(throttle(() => {SaveLocalStorageToState(store.getState())}))


export default store

