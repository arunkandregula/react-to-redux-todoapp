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


const TodoList = ({ items, isFetching, handleToggle, handleDelete }) => {
  if (isFetching && !items.length) {
    return <p>Loading...</p>;
  }
  return <div className="TodoList">
    <ul>
      {getTodoItemElements(items, handleToggle, handleDelete)}
    </ul>
  </div>;
}

export default TodoList;