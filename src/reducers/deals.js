import {
  FETCHED_DEALS,
} from '../actions/deals';

const initState = {
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
    default:
    return state;
  }
};
