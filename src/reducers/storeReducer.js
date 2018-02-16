import todosReducer, * as fromTodos from './todosReducer';
import currentTodoReducer from './currentTodoReducer';

const defaultState = {
  todos: {
    byIds: {},
    allIds: []
  },
  currentTodo: ''
};

const storeReducer = (state=defaultState, action)=>({
  todos: todosReducer(state.todos, action),
  currentTodo: currentTodoReducer(state.currentTodo, action)
});


export default storeReducer;

export const getFilteredTodos = (state, filter) => {
  //return filterTodos(state.todos, filter);
  return fromTodos.getFilteredTodos(state.todos, filter);
}


export const getIsFetching = (state, filter) => {
  return fromTodos.getIsFetching(state.todos, filter);
}

export const getErrorMessageForFilter = (state, filter) => {
  return fromTodos.getErrorMessageForFilter(state.todos, filter);
}



