export const addTodo = (list, newTodo)=>{
  return [...list, newTodo];
}

export const generateId = ()=>{
  return Math.random()*10000 << 0;
}

export const findById = (list, id)=>{
  return list.find((eachItem)=>{
    return eachItem.id === id;
  });
}

export const toggleTodo = (todo)=>{
  return {...todo, isComplete: !todo.isComplete};
}

export const updateTodo = (listOfTodos, updatedTodo) =>{
  const index = listOfTodos.findIndex(todo => todo.id === updatedTodo.id);

  return [
    ...listOfTodos.slice(0, index),
    updatedTodo,
    ...listOfTodos.slice(index+1)
  ];
  
}

export const deleteTodo = (list, id)=>{
  const index = list.findIndex((eachTodo)=>{
    return eachTodo.id === id;
  });

  return [
    ...list.slice(0, index),
    ...list.slice(index+1)
  ];
}

export const filterTodos = (todos, filter)=>{
  switch(filter){
    case 'all': return todos;
    case 'active': return todos.filter((eachTodo)=>{ return !eachTodo.isComplete });
    case 'complete': return todos.filter((eachTodo)=>{ return eachTodo.isComplete });
  }
}
