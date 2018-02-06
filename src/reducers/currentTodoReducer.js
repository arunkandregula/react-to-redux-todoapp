import Constants from '../constants/Constants';

const currentTodoReducer = (prevState='', action)=>{
  switch(action.type){
    case Constants.CURRENT_TODO_CHANGE: 
      return action.data;

    case Constants.ADD_TODO:
      return ''; // reset the current Todo after after adding a new todo.

  }
  return prevState;
}

export default currentTodoReducer;