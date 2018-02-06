import React from 'react';
import './TodoApp.css';
import { TodoInput, TodoItem, TodoList } from '..';
import { findById, toggleTodo, 
  updateTodo, deleteTodo, filterTodos  } from '../../../lib/todoHelpers';

import TodoService from '../../../services/todoService';
import Footer from '../../Router/Footer';
import PropTypes from 'prop-types';
import StoreFactory from '../../../store/StoreFactory';
import ActionsCreator from '../../../actions/ActionsCreator'

const _store = StoreFactory.getStore();

class TodoApp extends React.Component {
  static contextTypes = {
    route: PropTypes.string
  }

  getItems() {
    console.log(this.context.route);
    const filteredTodos =  filterTodos(_store.getState().todos, this.context.route);

    return filteredTodos.map((eachTodo) => {
      return <TodoItem 
        key={eachTodo.id} 
        todo={eachTodo} 
        handleToggle={this.handleToggle}
      />;
    });
  }

  handleToggle = (id) => { 
    _store.dispatch(ActionsCreator.getToggleTodoAction(id));
  }

  handleInputChange = (event) => {
    _store.dispatch(ActionsCreator.getChangeCurrentTodoAction(event.target.value));
  }

  componentDidMount(){
    TodoService.loadTodos().then((data)=>{
      _store.dispatch(ActionsCreator.getLoadTodosAction(data));
    });

    this.unsubscribe = _store.subscribe(()=>{
      this.forceUpdate();
    });
  }
  componentWillUnmount(){
      return this.unsubscribe();
  }

  handleInputSubmit = (event) => {
    event.preventDefault();
    _store.dispatch(ActionsCreator.getAddTodoAction(_store.getState().currentTodo));
  }

  handleInvalidInputSubmit = (event) => {
    event.preventDefault();
    _store.dispatch(ActionsCreator.getShowErrorMsgAction(
      'Please supply a valid Todo text'
    ));
  }

  render() {

    const submitHandler = _store.getState().currentTodo ? this.handleInputSubmit : this.handleInvalidInputSubmit;

    return <div className="TodoApp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <section className="main">
        {_store.getState().errorMessage && <span className='error'>{_store.getState().errorMessage}</span>}
        <TodoInput currentTodo={_store.getState().currentTodo} handleInputChange={this.handleInputChange} handleInputSubmit={submitHandler}/>
        <TodoList items={this.getItems()} />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>;
  }
}

export default TodoApp;