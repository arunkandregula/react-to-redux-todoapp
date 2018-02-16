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

      if(prevState.active && prevState.active.includes(action.data.id)) {
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

    case Constants.FETCH_TODOS_SUCCESS:
      return {
        ...prevState,
        [action.data.filter]: action.data.todos.map((eachTodo)=>{
          return eachTodo.id;
        })
      };
    case Constants.DELETE_TODO:
      const keys = Object.keys(prevState);
      const newState = {};
      keys.forEach((eachKey)=>{
        const indexOfTodo = prevState[eachKey].indexOf(action.data.id);
        if (indexOfTodo !== -1) {
          newState[eachKey] = [
            ...prevState[eachKey].slice(0, indexOfTodo),
            ...prevState[eachKey].slice(indexOfTodo + 1)
          ];
        } else {
          newState[eachKey] = [...prevState[eachKey]];
        }
      });
      return newState;
    default:
      break;
  }
  return prevState;
}

export default allIdsReducer;