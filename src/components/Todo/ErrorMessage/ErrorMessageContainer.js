import {connect} from 'react-redux';
import ErrorMessage from './ErrorMessage';

const mapStateToProps = (state)=>({
  message: state.errorMessage
});

export default connect(mapStateToProps)(ErrorMessage);