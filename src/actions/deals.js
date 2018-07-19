import * as DealsAPI from '../utils/DealsAPI';
import { getCategorySet } from './categories';
export const FETCHED_DEALS = 'FETCHED_DEALS';
export const GET_CATEGORY_SET = 'GET_CATEGORY_SET';

export const fetchDeals = () => (dispatch) => (
  DealsAPI
  .getDeals()
  .then(deals => {
    dispatch(fetchedDeals(deals));
    dispatch(getCategorySet(deals));
  })
);

export const fetchedDeals = (list) => ({
  type: FETCHED_DEALS,
  list
});
