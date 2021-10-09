import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

console.log("=====>",rootReducer);

//  Add middleware using currying because internally redux call it that way and these are reux midllewares not react


const logger=({dispatch,getState})=>(next)=>(action)=>{

  if(typeof action!=='function')
   console.log("ACTION_TYPE",action.type);
  next(action);
};

// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//   // console.log("ACTION_TYPE",action.type);

//   if(typeof action==='function')
//   {
//       action(dispatch);
//       return ;
//   }
//   next(action);
// };

// Created the redux store . the reducer will be called once when creating this and it will provide the defaultn state
const store=createStore(rootReducer,applyMiddleware(thunk,logger));


export const StoreContext=createContext();

class Provider extends React.Component {
  render() { 
    return (
      <StoreContext.Provider value={this.props.store}> 
        {/*See this is necessary so as to render every compennt within this and we have not directlyused so as to modify it later on  */}
          {this.props.children}
      </StoreContext.Provider>
    );
  }
}
 



ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


