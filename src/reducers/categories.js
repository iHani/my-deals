import {
  GET_CATEGORY_SET,
  UPDATE_FILTER_BY,
} from '../actions/categories';

const initState = {
  list: [],
  selectedFilter: "All"
}

export default (state = initState, action) => {
  const { filter } = action;

  switch (action.type) {
    case GET_CATEGORY_SET :
    // get unique set of categories
    const categories = [...new Set(state.deals.list.map(({ dealCategory }) => dealCategory))]
    console.log('GET_CATEGORY_SET state', state);
    return {
      ...state,
      list: categories
    };

    case UPDATE_FILTER_BY :
    return {
      ...state,
      selectedFilter: filter,
    };

    default:
    return state;
  }
};
