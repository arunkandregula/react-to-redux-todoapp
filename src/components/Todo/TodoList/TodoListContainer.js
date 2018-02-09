import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './TodoList';
import {filterTodos} from '../../../lib/todoHelpers';
import ActionsCreator from '../../../actions/ActionsCreator';

const getFilteredItems = (state, filter) => {
  return filterTodos(state.todos, filter);
}

const mapStateToProps = (state, ownProps)=>({
  items: getFilteredItems(state, ownProps.params.filter || 'all')
});

const mapDispatchToProps = (dispatch)=>({
  handleToggle: (id)=>{
   dispatch(ActionsCreator.getToggleTodoAction(id)); 
  }
});;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));