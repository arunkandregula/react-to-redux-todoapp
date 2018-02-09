import React from 'react';
import './TodoApp.css';
import { TodoInputContainer, TodoListContainer, ErrorMessageContainer } from '..';
import TodoService from '../../../services/todoService';
import Footer from '../../Router/Footer';
import PropTypes from 'prop-types';

const TodoApp = (props, context) => {
  return <div className="TodoApp">
    <header className="header">
      <h1>todos</h1>
    </header>
    <section className="main">
      <ErrorMessageContainer />
      <TodoInputContainer />
      <TodoListContainer route={context.route}/>
    </section>
    <footer>
      <Footer />
    </footer>
  </div>;
};

TodoApp.contextTypes = {
  route: PropTypes.string
}; 

export default TodoApp;