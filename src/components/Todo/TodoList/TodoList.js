import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const getTodoItemElements = (items, handleToggle, handleDelete)=>{
  return items.map((eachTodo) => {
    return <TodoItem 
      key={eachTodo.id} 
      todo={eachTodo} 
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />;
  });
}


const TodoList = ({items, handleToggle, handleDelete }) => {
  return <div className="TodoList">
    <ul>
      {getTodoItemElements(items, handleToggle, handleDelete)}
    </ul>
  </div>;
}

export default TodoList;