import {connect} from 'react-redux';
import TodoList from './TodoList';
import {filterTodos} from '../../../lib/todoHelpers';
import ActionsCreator from '../../../actions/ActionsCreator';

const getFilteredItems = (state, ownProps) => {
  return filterTodos(state.todos, ownProps.route);
}

const mapStateToProps = (state, ownProps)=>({
  items: getFilteredItems(state, ownProps)
});

const mapDispatchToProps = (dispatch)=>({
  handleToggle: (id)=>{
   dispatch(ActionsCreator.getToggleTodoAction(id)); 
  }
});;

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);