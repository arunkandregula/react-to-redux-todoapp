import Constants from '../constants/Constants';
const defaultState = {
  all: null,
  active: null,
  complete: null
};
const errorMessageReducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case Constants.FETCH_TODOS_FAILURE:
      return {
        ...prevState,
        [action.data.filter]: action.data.message
      };
    case Constants.FETCH_TODOS_REQUEST:
    case Constants.FETCH_TODOS_SUCCESS:
      return {
        ...prevState,
        [action.data.filter]: null
      };
    default:
      break;
  }
  return prevState;
}

export default errorMessageReducer;

export const getErrorMessageForFilter = (state, filter) => {
  return state[filter];
}