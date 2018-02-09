import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const getTodoItemElements = (items, handleToggle)=>{
  return items.map((eachTodo) => {
    return <TodoItem 
      key={eachTodo.id} 
      todo={eachTodo} 
      handleToggle={handleToggle}
    />;
  });
}


const TodoList = ({items, handleToggle}) => {
  return <div className="TodoList">
    <ul>
      {getTodoItemElements(items, handleToggle)}
    </ul>
  </div>;
}

export default TodoList;