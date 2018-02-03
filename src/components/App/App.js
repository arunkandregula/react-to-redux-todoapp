import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from '../Todo/TodoApp/TodoApp';
import Router from '../Router/Router';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
        <TodoApp />
       </Router> 
      </div>
    );
  }
}

export default App;
