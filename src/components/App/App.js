import React, { Component } from 'react';
import './App.css';
import TodoApp from '../Todo/TodoApp/TodoApp';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import StoreFactory from '../../store/StoreFactory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={StoreFactory.getStore()}>
          <Router history={browserHistory}>
            <Route path="/(:filter)" component={TodoApp} />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
