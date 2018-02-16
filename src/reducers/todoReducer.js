import Constants from '../constants/Constants';

const todoReducer = (prevState = {}, action)=>{
  switch(action.type){
    case Constants.ADD_TODO:
    case Constants.TOGGLE_TODO:
      return action.data;
    default:
      break;
  }
  return prevState;
}

export default todoReducer;