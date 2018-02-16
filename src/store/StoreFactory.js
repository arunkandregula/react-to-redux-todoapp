import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import storeReducer from '../reducers/storeReducer';

const thunkMiddleWare = (store) => (nextDispatch) => (action) =>
  typeof action === 'function' ? action(nextDispatch) : nextDispatch(action);

const configureStore = ()=>{
  const middlewares = [thunkMiddleWare];
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