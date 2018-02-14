import Constants from '../constants/Constants';

const allIdsReducer = (prevState = [], action)=>{
  switch(action.type){
    case Constants.ADD_TODO:
      return {
        ...prevState,
        all: [...(prevState.all || []), action.data.id],
        active: [...(prevState.active || []), action.data.id]
      };
      
    case Constants.TOGGLE_TODO:
      let newActiveList = prevState.active;
      let newCompleteList = prevState.complete;

      if(prevState.active.includes(action.data.id)) {
        let index = prevState.active.indexOf(action.data.id);
        newActiveList = [
          ...prevState.active.slice(0, index),
          ...prevState.active.slice(index + 1)
        ]

        newCompleteList = [
          ...newCompleteList,
          action.data.id
        ];
      } else {
        let index = prevState.complete.indexOf(action.data.id);
        newCompleteList = [
          ...prevState.complete.slice(0, index),
          ...prevState.complete.slice(index + 1)
        ]
        newActiveList = [
          ...newActiveList,
          action.data.id
        ];

      }
      return {
        ...prevState,
        active: newActiveList,
        complete: newCompleteList
      };
      
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