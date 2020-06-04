import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
import {Provider} from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux';
import promisseMiddelware from 'react=promise';
import reducer from './reducers';
//In middleWare we have a redux promise, so we use that
//Composite function

const createStoreWithMiddleware = applyMiddleware(promisseMiddelware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <App />
  </Provider>
 ,
  document.getElementById('root')
);

