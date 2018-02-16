import Constants from '../constants/Constants';
import TodoService from '../services/todoService';
import { getIsFetching } from '../reducers/storeReducer';

const ActionCreators = {
  getAddTodoThunkAction(text) {
    return (dispatch) => {
      TodoService.createTodo(text).then((todo) => {
        dispatch({
          type: Constants.ADD_TODO,
          data: todo
        });
      });
    }
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
  getToggleTodoThunkAction(todo){
    return (dispatch) => {
      const toggledTodo = {
        ...todo,
        isComplete: !todo.isComplete
      };
      TodoService.saveTodo(toggledTodo).then(() => {
        dispatch({
          type: Constants.TOGGLE_TODO,
          data: toggledTodo
        });
      });
    }
  },
  getDeleteTodoThunkAction(todo){
    return (dispatch) => {
      TodoService.deleteTodo(todo).then(() => {
        dispatch({
          type: Constants.DELETE_TODO,
          data: todo
        });
      });
    }
  },

  getLoadTodosThunkAction(filter) {

    return (dispatch, getState) => {

      // check the isFetching flag foer the filter
      if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
      }

      // Step1.
      dispatch({
        type: Constants.FETCH_TODOS_REQUEST,
        data: {
          filter
        }
      });

      return TodoService.loadTodos(filter).then(
        (data) => {
          dispatch({
            type: Constants.FETCH_TODOS_SUCCESS,
            data: {
              todos: data,
              filter
            }
          });
        },
        error => {
          dispatch({
            type: Constants.FETCH_TODOS_FAILURE,
            data: {
              filter,
              message: error.message || 'Something went wrong'
            }
          });
        }

      );
    }
  }

};

export default ActionCreators;