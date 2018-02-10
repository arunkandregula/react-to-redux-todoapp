import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './TodoList';
import ActionsCreator from '../../../actions/ActionsCreator';
import * as fromStoreState from '../../../reducers/storeReducer';
import TodoService from '../../../services/todoService';

const mapStateToProps = (state, ownProps)=>({
  items: fromStoreState.getFilteredTodos(state, ownProps.params.filter || 'all')
});

/*

// Lets see how we can avoid writing boiler plate code in mapDispatchToProps function.

const mapDispatchToProps = (dispatch)=>({
  handleToggle: (id)=>{
   dispatch(ActionsCreator.getToggleTodoAction(id)); 
  }
});;
*/

//Using mapDispatchToProps shorthand notation.
const mapDispatchToProps = {
  handleToggle: ActionsCreator.getToggleTodoAction,
  loadData: ActionsCreator.getLoadTodosAction
};


class TodoListWrapper extends React.Component{
  componentDidMount(){
    TodoService.loadTodos().then((jsonResponse)=>{
      this.props.loadData(jsonResponse);
    });
  }
  render(){
    return <TodoList {...this.props} />;
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoListWrapper));