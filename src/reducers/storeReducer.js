import todosReducer, * as fromTodos from './todosReducer';
import currentTodoReducer from './currentTodoReducer';
import errorMessageReducer from './errorMessageReducer';

const defaultState = {
  todos: [],
  currentTodo: '',
  errorMessage: null
};

const storeReducer = (state=defaultState, action)=>({
  todos: todosReducer(state.todos, action),
  currentTodo: currentTodoReducer(state.currentTodo, action),
  errorMessage: errorMessageReducer(state.errorMessage, action)
});


export default storeReducer;

export const getFilteredTodos = (state, filter) => {
  //return filterTodos(state.todos, filter);
  return fromTodos.getFilteredTodos(state.todos, filter);
}

