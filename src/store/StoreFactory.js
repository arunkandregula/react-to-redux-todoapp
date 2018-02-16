import {createStore} from 'redux';
import storeReducer from '../reducers/storeReducer';

const getDispatchThatLogsState = (store) => (dispatch) => {
  if(!console.group){
    return dispatch;
  }
  return (action)=>{
    console.group(action.type);
    console.log('%c prev State', 'color: gray',store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = dispatch(action);
    console.log('%c next State:', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
}

const getDispatchThatRecognizePromise = (store)=>(dispatch)=>(action)=>{
  if(typeof action.then === 'function'){
    return action.then((data)=>{
      dispatch(data);
    });
  } else{
     dispatch(action);
  }
}


const wrapDispatchWithMiddleWare = (store, middlewares)=>{
  // clone it before reversing
  middlewares.slice().reverse().forEach((eachMiddleWare)=>{
    store.dispatch = eachMiddleWare(store)(store.dispatch);
  });
}

const configureStore = ()=>{
  const store = createStore(storeReducer);

  const middlewares = [getDispatchThatRecognizePromise];

  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(getDispatchThatLogsState);
  }

  wrapDispatchWithMiddleWare(store, middlewares);

  return store;
};

const store = configureStore();

const StoreFactory = {
  getStore(){
    return store;
  }
}

export default StoreFactory;