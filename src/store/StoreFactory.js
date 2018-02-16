import {createStore} from 'redux';
import storeReducer from '../reducers/storeReducer';

const getDispatchThatLogsState = (store) =>{
  const originalDispatch = store.dispatch;

  if(!console.group){
    return originalDispatch;
  }
  return (action)=>{
    console.group(action.type);
    console.log('%c prev State', 'color: gray',store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = originalDispatch(action);
    console.log('%c next State:', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
}

const getDispatchThatRecognizePromise = (store)=>{
  const nextDispatch = store.dispatch;
  return (action)=>{
    if (typeof action.then === 'function') {
      return action.then((data) => {
        nextDispatch(data);
      });
    }
    return nextDispatch(action);
  }
}

const configureStore = ()=>{
  const store = createStore(storeReducer);

  if(process.env.NODE_ENV !== 'production'){
    store.dispatch = getDispatchThatLogsState(store);
  }

  store.dispatch = getDispatchThatRecognizePromise(store);

  return store;
};

const store = configureStore();

const StoreFactory = {
  getStore(){
    return store;
  }
}

export default StoreFactory;