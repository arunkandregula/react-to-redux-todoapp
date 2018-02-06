import Constants from '../constants/Constants';

const ActionsCreator = {
  getAddTodoAction(text){
    return {
      type: Constants.ADD_TODO,
      data: text
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
      data: id
    };

  }
};

export default ActionsCreator;