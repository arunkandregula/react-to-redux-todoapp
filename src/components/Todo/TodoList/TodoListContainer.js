import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './TodoList';
import ActionsCreator from '../../../actions/ActionsCreator';
import * as fromStoreState from '../../../reducers/storeReducer';
import TodoService from '../../../services/todoService';

const mapStateToProps = (state, ownProps)=>{
  const filter = ownProps.params.filter || 'all';

  return {
    items: fromStoreState.getFilteredTodos(state, filter),
    filter
  };
}
  


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
    this.fetchData(this.props.filter);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.filter !== this.props.filter){
      this.fetchData(nextProps.filter);
    }
  }

  fetchData(filter){
    TodoService.loadTodos(filter).then((jsonResponse)=>{
      this.props.loadData(jsonResponse, this.props.filter);
    });
  }

  render(){
    return <TodoList {...this.props} />;
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoListWrapper));