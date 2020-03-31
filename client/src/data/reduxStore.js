import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import productReducer from './productReducer'
import { reducer as formReducer } from 'redux-form'
import userReducer from "./authReducer"


export let reducers = combineReducers({
  productsPage: productReducer,
  userPage: userReducer,
  form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store;