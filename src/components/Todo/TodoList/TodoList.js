import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
  return <div className="TodoList">
    <ul>
      {props.items}
    </ul>
  </div>;
}

export default TodoList;