import React from 'react';
import './TodoItem.css';
import classNames from 'classnames';

const handleDelete = (props, event)=>{
  event.preventDefault();
  props.handleDelete(props.todo);
}
const TodoItem = (props) => {

  const todoItemClass = classNames({
    'strike': props.todo.isComplete
  });
  let content = <span className={todoItemClass}>{props.todo.name}</span>;
  /* eslint-disable jsx-a11y/href-no-hash */
  return <li className="TodoItem">
      <a href="#" onClick={handleDelete.bind(null, props )}>X</a><input type="checkbox" checked={props.todo.isComplete} onChange={props.handleToggle.bind(null, props.todo )} />
    {content}
  </li>;
}

export default TodoItem;