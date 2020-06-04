import { createStore, applyMiddleware } from 'redux';
import promisseMiddleware from 'react-promise';
import reducer from '../reducers';

//Apply middleware is the function using which we apply middleware;
//We apply different middleware(promisseMiddleware is different middleware name) like promise, thunk or saga;
//Middleware acts like an enhancer for the store that helps to resolve the data and actions more efficiently.
//Promise and thunk middleware owrk internally.however, for saga we may write code.
const store = createStore(reducer, applyMiddleware(promisseMiddleware));

export default store;