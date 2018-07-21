import * as DealsAPI from '../utils/DealsAPI';

export const FETCHED_DEALS = 'FETCHED_DEALS';
export const GET_CATEGORY_SET = 'GET_CATEGORY_SET';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const LOGOUT = 'LOGOUT';
export const NEW_DEAL = 'NEW_DEAL';

// export const fetchDeals = () => (dispatch) => (
//   DealsAPI
//   .getDeals()
//   .then(deals => {
//     dispatch(fetchedDeals(deals));
//     dispatch(getCategorySet(deals));
//   })
// );

export const fetchedDeals = (list) => ({
  type: FETCHED_DEALS,
  list
});

export const signup = (user) => (dispatch) => {
  return DealsAPI
  .signup(user)
  .then(({ isAuthenticated }) => isAuthenticated && dispatch(userAuthenticated()))
}

export const userAuthenticated = () => {
  return ({
    type: USER_AUTHENTICATED,
  });
}

export const logout = () => (dispatch) => {
  return DealsAPI
  .logout()
  .then(() => dispatch(logoutUser()))
}

export const logoutUser = () =>  ({
  type: LOGOUT,
});

// checking auth by the token that will be sent in the headers
export const checkAuthUser = () => (dispatch) => {
  return DealsAPI
  .checkAuthUser()
  .then(({ isAuthenticated }) => {
    console.log(isAuthenticated);
    isAuthenticated ? dispatch(userAuthenticated()) : dispatch(logoutUser())
  })
}

export const newDeal = (deal) => ({
  type: NEW_DEAL,
  deal
});
