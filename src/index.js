import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

console.log("=====>",rootReducer);

//  Add middleware using currying because internally redux call it that way and these are reux midllewares not react


const logger=({dispatch,getState})=>(next)=>(action)=>{
  console.log("ACTION_TYPE",action.type);
  next(action);
};

// Created the redux store . the reducer will be called once when creating this and it will provide the defaultn state
const store=createStore(rootReducer,applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);


