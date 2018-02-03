import React from 'react';
import './TodoApp.css';
import { TodoInput, TodoItem, TodoList } from '..';
import { addTodo, generateId, findById, toggleTodo, 
  updateTodo, deleteTodo, filterTodos  } from '../../../lib/todoHelpers';

import TodoService from '../../../services/todoService';
import { pipe } from '../../../lib/utils';
import Footer from '../../Router/Footer';
import PropTypes from 'prop-types';

class TodoApp extends React.Component {
  static contextTypes = {
    route: PropTypes.string
  }
  state = {
    todos: [],
    currentTodo: '',
    errorMessage: ''
  }

  makeEditable = (id, event)=>{
    let todo = findById(this.state.todos, id);
    todo = {...todo, isEditable: true};
    const updatedTodos = updateTodo(this.state.todos, todo);
    this.setState({
      todos: updatedTodos
    });
    TodoService.saveTodo(todo);
  }
  makeNonEditable = (id, event)=>{
    let todo = findById(this.state.todos, id);
    todo = {...todo, isEditable: false};
    const updatedTodos = updateTodo(this.state.todos, todo);
    this.setState({
      todos: updatedTodos
    });
    TodoService.saveTodo(todo);
  }
  handleChange = (id, event)=>{
    debugger;
    let todo = findById(this.state.todos, id);
    todo = {...todo, name: event.target.value};
    const updatedTodos = updateTodo(this.state.todos, todo);
    this.setState({
      todos: updatedTodos
    });
  }

  getItems() {
    console.log(this.context.route);
    debugger;
    const filteredTodos =  filterTodos(this.state.todos, this.context.route);

    return filteredTodos.map((eachTodo) => {
      return <TodoItem 
        key={eachTodo.id} 
        todo={eachTodo} 
        handleToggle={this.handleToggle} 
        handleRemove={this.handleRemove} 
        makeEditable={this.makeEditable}
        makeNonEditable={this.makeNonEditable}
        handleChange={this.handleChange} 
      />;
    });
  }

  handleInputChange = (event) => {
    this.setState({
      currentTodo: event.target.value
    });
  }

  componentDidMount(){
    TodoService.loadTodos().then((data)=>{
      debugger;
      this.setState({
        todos: data
      });
    })
  }

  handleInputSubmit = (event) => {
    debugger;
    event.preventDefault();
    let id = generateId();
    let newTodo = {
      id,
      name: this.state.currentTodo,
      isComplete: false
    };
    const newList = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: newList,
      currentTodo: '',
      errorMessage: ''
    });

    TodoService.createTodo(newTodo).then(()=>{
      console.log('A new todo created');
    });
  }

  handleInvalidInputSubmit = (event) => {
    event.preventDefault();
    this.setState({
      errorMessage: 'Please supply a valid Todo text'
    });
  }

  handleToggle = (id)=>{
    
    // step1: findById
    const todo = findById(this.state.todos, id);

    // step2: toggleTodo
    const toggledTodo = toggleTodo(todo);

    // step3: updateTodo
    const updatedTodos = updateTodo(this.state.todos, toggledTodo);
    

    /*

    const getUpdatedTodos = pipe(findById, toggleTodo, updateTodo.bind(null, this.state.todos));

    const updatedTodos = getUpdatedTodos(this.state.todos, id);
    */
    this.setState({
      todos: updatedTodos
    });

    TodoService.saveTodo(toggledTodo);
  }

  handleRemove = (id)=>{
    /*
    const pipeline = pipe(findById, deleteTodo.bind(null, this.state.todos));
    pipeline(id);
    */
    const todo = findById(this.state.todos, id);

    const updatedTodos = deleteTodo(this.state.todos, id);
    this.setState({
      todos: updatedTodos
    });

    TodoService.deleteTodo(todo);
  }

  render() {

    const submitHandler = this.state.currentTodo? this.handleInputSubmit : this.handleInvalidInputSubmit;

    return <div className="TodoApp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <section className="main">
        {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
        <TodoInput currentTodo={this.state.currentTodo} handleInputChange={this.handleInputChange} handleInputSubmit={submitHandler}/>
        <TodoList items={this.getItems()} />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>;
  }
}

export default TodoApp;