import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './TodoList';
import ActionCreators from '../../../actions/ActionCreators';
import * as fromStoreState from '../../../reducers/storeReducer';

const mapStateToProps = (state, ownProps)=>{
  const filter = ownProps.params.filter || 'all';
  return {
    items: fromStoreState.getFilteredTodos(state, filter),
    filter,
    isFetching: fromStoreState.getIsFetching(state, filter)
  };
}

/*

// Lets see how we can avoid writing boiler plate code in mapDispatchToProps function.

const mapDispatchToProps = (dispatch)=>({
  handleToggle: (id)=>{
   dispatch(ActionCreators.getToggleTodoAction(id));
  }
});;
*/

//Using mapDispatchToProps shorthand notation.
const mapDispatchToProps = {
  handleToggle: ActionCreators.getToggleTodoThunkAction,
  handleDelete: ActionCreators.getDeleteTodoThunkAction,
  //loadData: ActionCreators.getLoadTodosAction - discussed in one of the previous steps
  //loadData: ActionCreators.getLoadTodosPromiseAction - discussed in one of the previous steps
  loadData: ActionCreators.getLoadTodosThunkAction

};


class TodoListWrapper extends React.Component{
  componentDidMount(){
    this.fetchData(this.props.filter);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.filter !== this.props.filter){
      this.fetchData(nextProps.filter);
    }
  }

  fetchData(filter){
    /*
    Approach 1.
    TodoService.loadTodos(filter).then((jsonResponse)=>{
      this.props.loadData(jsonResponse, this.props.filter);
    });
    */
    // Approach 2.
    this.props.loadData(filter).then(() => console.log('loadData is done. Async'));

  }

  render(){
    return <TodoList {...this.props} />;
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoListWrapper));