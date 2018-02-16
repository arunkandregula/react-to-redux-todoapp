import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import storeReducer from '../reducers/storeReducer';

/*
const thunkMiddleWare = (store) => (nextDispatch) => (action) =>
  typeof action === 'function' ? action(nextDispatch, store.getState) : nextDispatch(action);
*/

const configureStore = ()=>{
  const middlewares = [thunk];
  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(createLogger());
  }
  return createStore(storeReducer, applyMiddleware(...middlewares));
};

const store = configureStore();

const StoreFactory = {
  getStore(){
    return store;
  }
}

export default StoreFactory;