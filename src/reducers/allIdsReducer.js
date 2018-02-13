import Constants from '../constants/Constants';

const allIdsReducer = (prevState = [], action)=>{
  switch(action.type){
    case Constants.ADD_TODO:
      return [...prevState, action.data.id];
    case Constants.LOAD_TODOS:
      return {
        ...prevState,
        [action.data.filter]: action.data.todos.map((eachTodo)=>{
          return eachTodo.id;
        })
      };
  }
  return prevState;
}

export default allIdsReducer;