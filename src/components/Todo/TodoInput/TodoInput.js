import React from 'react';
import './TodoInput.css';

class TodoInput extends React.Component{
  
  onSubmit = (event)=>{
     event.preventDefault();
     this.props.handleInputSubmit(this.refs.inputNode.value);
  }
  render(){
    return <form onSubmit={this.onSubmit}>
      <input 
        type="text" 
        ref="inputNode"
        placeholder="What needs to be done?" 
        className="TodoInput" 
        value={this.props.currentTodo} 
        onChange={this.props.handleInputChange} 
      />
    </form>;  
  }
}

export default TodoInput;