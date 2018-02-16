import {combineReducers} from 'redux';
import byIdsReducer from './byIdsReducer';
import allIdsReducer from './allIdsReducer';
import isFetchingByFilterReducer, * as fromIsFetchingByFilter from './isFetchingByFilterReducer';

const todosReducer = combineReducers({
  byIds: byIdsReducer,
  allIds: allIdsReducer,
  isFetchingByFilter: isFetchingByFilterReducer
});

export default todosReducer;

export const getFilteredTodos = (state, filter) => {
  if(!state.allIds[filter]){
    return [];
  }
  const filteredTodos = state.allIds[filter].map((eachId)=>{
    return state.byIds[eachId];
  });

  return filteredTodos;
}

export const getIsFetching = (state, filter) => {
  return fromIsFetchingByFilter.getIsFetchingForFilter(state.isFetchingByFilter, filter);
}