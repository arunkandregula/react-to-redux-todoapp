import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';
import storeReducer from '../reducers/storeReducer';

const configureStore = ()=>{
  const middlewares = [promise];
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