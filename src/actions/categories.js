// import * as DealsAPI from '../utils/DealsAPI';
export const GET_CATEGORY_SET = 'GET_CATEGORY_SET';
export const UPDATE_FILTER_BY = 'UPDATE_FILTER_BY';

export const getCategorySet = () => ({
  type: GET_CATEGORY_SET,
});

export const updateFilterBy = (filter) => ({
  type: UPDATE_FILTER_BY,
  filter
});
