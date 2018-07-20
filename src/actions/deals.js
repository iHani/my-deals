import * as DealsAPI from '../utils/DealsAPI';
import { getCategorySet } from './categories';
export const FETCHED_DEALS = 'FETCHED_DEALS';
export const GET_CATEGORY_SET = 'GET_CATEGORY_SET';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const LOGOUT = 'LOGOUT';

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

export const authenticateUser = (user) => (dispatch) => {
  return DealsAPI
  .auth(user)
  .then(({ isAuthenticated }) => isAuthenticated && dispatch(userAuthenticated()))
}

export const userAuthenticated = () => ({
  type: USER_AUTHENTICATED,
});

export const logout = () => (dispatch) => {
  return DealsAPI
  .logout()
  .then(({ token }) => {
    //the key where we save the token is named 'token' in localStorage
    localStorage.removeItem('token')
    dispatch(logoutUser())
  })
}
export const logoutUser = () =>  ({
  type: LOGOUT,
});

export const checkAuthUser = (token) => (dispatch) => {
  return DealsAPI
  .checkAuthUser(token)
  .then(({ isAuthenticated }) => isAuthenticated && dispatch(userAuthenticated()))
}
