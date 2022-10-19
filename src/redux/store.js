import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { forgotPasswordReducer, UserReducer } from './reducers/UserReducer';
import { productsReducer } from './reducers/ProductReducer';

const rootReducer=combineReducers({

    userData:UserReducer,
    forgotPassword:forgotPasswordReducer,
    productData:productsReducer,

})

const middleware=[thunk];
const store=createStore(rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)));

    
 export default store;  