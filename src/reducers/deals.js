import {
  FETCHED_DEALS,
  USER_AUTHENTICATED,
  LOGOUT,
  NEW_DEAL,
  DELETE_DEAL
} from '../actions/deals';

const initState = {
  isAuthenticated: false,
  list: [],
}

export default (state = initState, action) => {
  const { list, deal, id } = action;
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
    };
    case NEW_DEAL :
    return {
      ...state,
      list: [ ...state.list, deal ]
    };
    case DELETE_DEAL :
    console.log('state.list', state.list.filter(({ dealId }) => dealId !== id));
    return {
      ...state,
      list: state.list.filter(({ dealId }) => dealId !== id)
    };

    default:
    return state;
  }
};
