import Constants from '../constants/Constants';
import { v4 } from 'node-uuid';

const ActionsCreator = {
  getAddTodoAction(text){
    return {
      type: Constants.ADD_TODO,
      data: {
        id: v4(),
        text
      }
    };
  },
  getLoadTodosAction(todos){
    return {
      type: Constants.LOAD_TODOS,
      data: todos
    };
  },
  getChangeCurrentTodoAction(currentTodo){
    return {
      type: Constants.CURRENT_TODO_CHANGE,
      data: currentTodo
    };
  },
  getShowErrorMsgAction(msg){
    return {
      type: Constants.SHOW_ERROR_MESSAGE,
      data: msg
    };
  },
  getToggleTodoAction(id){
    return {
      type: Constants.TOGGLE_TODO,
      data: {
        id
      }
    };

  }
};

export default ActionsCreator;