import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import acorns from './reducers/acorns'

const store = createStore(acorns, composeWithDevTools());

export default store;