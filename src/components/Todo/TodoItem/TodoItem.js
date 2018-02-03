import React from 'react';
import './TodoItem.css';
import classNames from 'classnames';

const TodoItem = (props) => {

  const todoItemClass = classNames({
    'strike': props.todo.isComplete
  });
  debugger;
  let content = <span onClick={props.makeEditable.bind(null, props.todo.id)} className={todoItemClass}>{props.todo.name}</span>;
  if(props.todo.isEditable){
    content = <input type="textbox" onChange={props.handleChange.bind(null, props.todo.id)} onBlur={props.makeNonEditable.bind(null, props.todo.id)} value={props.todo.name}></input>;
  }
  

  return <li className="TodoItem">
    <a href="#" onClick={props.handleRemove.bind(null, props.todo.id)} className="delete-icon">X</a>
    <input type="checkbox" checked={props.todo.isComplete} onChange={props.handleToggle.bind(null, props.todo.id )} />
    {content}
  </li>;
}

export default TodoItem;