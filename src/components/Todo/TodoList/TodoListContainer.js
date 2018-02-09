import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './TodoList';
import {filterTodos} from '../../../lib/todoHelpers';
import ActionsCreator from '../../../actions/ActionsCreator';
import * as fromStoreState from '../../../reducers/storeReducer';

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
  handleToggle: ActionsCreator.getToggleTodoAction
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));