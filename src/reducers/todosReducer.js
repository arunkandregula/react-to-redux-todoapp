import Constants from '../constants/Constants';
import { generateId, addTodo, findById, toggleTodo } from '../lib/todoHelpers';
import TodoService from '../services/todoService';

const todosReducer = (prevState=[], action)=>{
  switch(action.type){
    case Constants.ADD_TODO:
      let id = generateId();
      let newTodo = {
        id,
        name: action.data,
        isComplete: false
      };
      
      TodoService.createTodo(newTodo).then(()=>{
        console.log('A new todo created');
      });
      return addTodo(prevState, newTodo);
    case Constants.TOGGLE_TODO:
      const todo = findById(prevState, action.data);
      const toggledTodo = toggleTodo(todo);
      const indexOfToggledTodo = prevState.findIndex((eachTodo)=>{
        return eachTodo.id === toggledTodo.id;
      });
      return [
        ...prevState.slice(0, indexOfToggledTodo),
        toggledTodo,
        ...prevState.slice(indexOfToggledTodo+1)
      ];

    case Constants.LOAD_TODOS:
      debugger;
      return action.data;


  }
  return prevState;
}

export default todosReducer;  