import todosReducer from './todosReducer';
import currentTodoReducer from './currentTodoReducer';
import errorMessageReducer from './errorMessageReducer';

const defaultState = {
  todos: [],
  errorMessage: null
};

const storeReducer = (state=defaultState, action)=>({
  todos: todosReducer(state.todos, action),
  currentTodo: currentTodoReducer(state.currentTodo, action),
  errorMessage: errorMessageReducer(state.errorMessage, action)
});

export default storeReducer;