import {connect} from 'react-redux';
import TodoInput from './TodoInput';
import ActionsCreator from '../../../actions/ActionsCreator';

const mapStateToProps = (state)=>({
  currentTodo: state.currentTodo
});

const mapDispatchToProps = (dispatch)=>({
  handleInputChange: (event)=>{
    dispatch(ActionsCreator.getChangeCurrentTodoAction(event.target.value));
  },
  handleInputSubmit: (currentTodo)=>{
    // Million dollar question: How to access state in mapDispatchToProps ?
    // We cant ideally.
    // So 1 way to solve this is to get the value of currentTodo from input ref
    // 2nd way to solve is to pass third param as prevState.currentTodo in todosReducer
    if(currentTodo){
      dispatch(ActionsCreator.getAddTodoAction(currentTodo));
    } else {
      dispatch(ActionsCreator.getShowErrorMsgAction(
        'Please supply a valid Todo text'
      ));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);