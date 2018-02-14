import Constants from '../constants/Constants';
import TodoService from '../services/todoService';

const todoReducer = (prevState = {}, action)=>{
  switch(action.type){
    case Constants.ADD_TODO:
      const newTodo = {
        id: action.data.id,
        name: action.data.text,
        isComplete: false
      };
    
      TodoService.createTodo(newTodo).then(()=>{
        console.log('A new todo created');
      });
      return newTodo;
    

    case Constants.TOGGLE_TODO:
      const toggledTodo = {
        ...prevState,
        isComplete: !prevState.isComplete
      };
      TodoService.saveTodo(toggledTodo).then(()=>{
        console.log('Todo toggled');
      });
      return toggledTodo;
  }
  return prevState;
}

export default todoReducer;