import React from 'react';
import './TodoItem.css';
import classNames from 'classnames';

const TodoItem = (props) => {

  const todoItemClass = classNames({
    'strike': props.todo.isComplete
  });
  let content = <span className={todoItemClass}>{props.todo.name}</span>;
  

  return <li className="TodoItem">
    <span onClick={props.handleDelete.bind(null, props.todo.id )}>X</span><input type="checkbox" checked={props.todo.isComplete} onChange={props.handleToggle.bind(null, props.todo.id )} />
    {content}
  </li>;
}

export default TodoItem;