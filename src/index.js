import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

console.log("=====>",rootReducer);


// Created the redux store . the reducer will be called once when creating this and it will provide the defaultn state
const store=createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);


