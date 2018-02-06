import {createStore} from 'redux';
import storeReducer from '../reducers/storeReducer';

const configureStore = ()=>{
  const store = createStore(storeReducer);
  return store;
};

const store = configureStore();

const StoreFactory = {
  getStore(){
    return store;
  }
}

export default StoreFactory;