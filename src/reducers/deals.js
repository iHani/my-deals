import {
  FETCHED_DEALS,
  USER_AUTHENTICATED,
  LOGOUT
} from '../actions/deals';

const initState = {
  isAuthenticated: false,
  list: [],
}

export default (state = initState, action) => {
  const { list } = action;
  switch (action.type) {
    case FETCHED_DEALS :
    return {
      ...state,
      list
    };
    case USER_AUTHENTICATED :
    return {
      ...state,
      isAuthenticated: true
    };
    case LOGOUT :
    return {
      ...state,
      isAuthenticated: false
    };    default:
    return state;
  }
};
