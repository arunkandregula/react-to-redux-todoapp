import Constants from '../constants/Constants';
import todoReducer from './todoReducer';

const byIdsReducer = (prevState = {}, action)=>{
  switch(action.type){
    case Constants.ADD_TODO:
    case Constants.TOGGLE_TODO:
      return {
        ...prevState,
        [action.data.id]: todoReducer(prevState[action.data.id], action)
      };
    case Constants.LOAD_TODOS:
      let map = {};
      map = action.data.todos.reduce((accumulator, currentValue)=>{
        accumulator[currentValue.id] = currentValue;
        return accumulator;
      }, prevState);
      return map;
    case Constants.DELETE_TODO:
      let newState = Object.assign({}, prevState);
      delete newState[action.data.id];
      return newState;
  
  }
  return prevState;
}

export default byIdsReducer;