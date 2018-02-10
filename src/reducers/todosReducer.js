import {combineReducers} from 'redux';
import { filterTodos } from '../lib/todoHelpers';
import byIdsReducer from './byIdsReducer';
import allIdsReducer from './allIdsReducer';

const todosReducer = combineReducers({
  byIds: byIdsReducer,
  allIds: allIdsReducer
});

export default todosReducer;  

export const getFilteredTodos = (state, filter) => {
  const allTodos = state.allIds.map((eachId)=>{
    debugger;
    return state.byIds[eachId];
  });

  return filterTodos(allTodos, filter);
}