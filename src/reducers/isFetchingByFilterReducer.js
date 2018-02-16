import Constants from '../constants/Constants';

const isFetchingByFilterDefaultState = {
  all: false,
  active: false,
  complete: false
};

const isFetchingByFilterReducer = (prevState = isFetchingByFilterDefaultState, action) => {

  switch (action.type) {
    case Constants.REQUEST_TODOS:
      switch (action.data.filter) {
        case 'all': return {
          ...prevState,
          all: true
        };
        case 'active': return {
          ...prevState,
          active: true
        };
        case 'complete': return {
          ...prevState,
          complete: true
        };
        default:
          break;
      }
      break;
    case Constants.RECEIVE_TODOS:
      switch (action.data.filter) {
        case 'all': return {
          ...prevState,
          all: false
        };
        case 'active': return {
          ...prevState,
          active: false
        };
        case 'complete': return {
          ...prevState,
          complete: false
        };
        default:
          break;
      }
      break;
    default:
      break;
  }
  return prevState;
}

export default isFetchingByFilterReducer;

export const getIsFetchingForFilter = (state, filter) => {
  return state[filter];
}