import React from 'react';
import './TodoApp.css';
import { TodoInput, TodoItem, TodoList } from '..';
import { findById, toggleTodo, 
  updateTodo, deleteTodo, filterTodos  } from '../../../lib/todoHelpers';

import TodoService from '../../../services/todoService';
import Footer from '../../Router/Footer';
import PropTypes from 'prop-types';

import ActionsCreator from '../../../actions/ActionsCreator'

class TodoApp extends React.Component {
  static contextTypes = {
    route: PropTypes.string,
    store: PropTypes.object
  }

  getItems() {
    console.log(this.context.route);
    const filteredTodos =  filterTodos(this.context.store.getState().todos, this.context.route);

    return filteredTodos.map((eachTodo) => {
      return <TodoItem 
        key={eachTodo.id} 
        todo={eachTodo} 
        handleToggle={this.handleToggle}
      />;
    });
  }

  handleToggle = (id) => { 
    this.context.store.dispatch(ActionsCreator.getToggleTodoAction(id));
  }

  handleInputChange = (event) => {
    this.context.store.dispatch(ActionsCreator.getChangeCurrentTodoAction(event.target.value));
  }

  componentDidMount(){
    TodoService.loadTodos().then((data)=>{
      this.context.store.dispatch(ActionsCreator.getLoadTodosAction(data));
    });

    this.unsubscribe = this.context.store.subscribe(()=>{
      this.forceUpdate();
    });
  }
  componentWillUnmount(){
      return this.unsubscribe();
  }

  handleInputSubmit = (event) => {
    event.preventDefault();
    this.context.store.dispatch(ActionsCreator.getAddTodoAction(this.context.store.getState().currentTodo));
  }

  handleInvalidInputSubmit = (event) => {
    event.preventDefault();
    this.context.store.dispatch(ActionsCreator.getShowErrorMsgAction(
      'Please supply a valid Todo text'
    ));
  }

  render() {

    const submitHandler = this.context.store.getState().currentTodo ? this.handleInputSubmit : this.handleInvalidInputSubmit;

    return <div className="TodoApp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <section className="main">
        {this.context.store.getState().errorMessage && <span className='error'>{this.context.store.getState().errorMessage}</span>}
        <TodoInput currentTodo={this.context.store.getState().currentTodo} handleInputChange={this.handleInputChange} handleInputSubmit={submitHandler}/>
        <TodoList items={this.getItems()} />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>;
  }
}

export default TodoApp;