import Constants from '../constants/Constants';
import { v4 } from 'node-uuid';
import TodoService from '../services/todoService';

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
  getLoadTodosAction(todos, filter){
    return {
      type: Constants.LOAD_TODOS,
      data: {
        todos,
        filter
      }
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
  },
  getDeleteTodoAction(id){
    return {
      type: Constants.DELETE_TODO,
      data: {
        id
      }
    };
  },

  getLoadTodosPromiseAction(filter){
    return TodoService.loadTodos(filter).then((data)=>{
      return ActionsCreator.getLoadTodosAction(data, filter);
    });
  }

};

export default ActionsCreator;