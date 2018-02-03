import React from 'react';
import './TodoInput.css';

const TodoInput = (props) => {
  return <form onSubmit={props.handleInputSubmit}>
    <input type="text" placeholder="What needs to be done?" className="TodoInput" value={props.currentTodo} onChange={props.handleInputChange} />
  </form>;  
}

export default TodoInput;