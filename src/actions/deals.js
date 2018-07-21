import * as DealsAPI from '../utils/DealsAPI';

export const FETCHED_DEALS = 'FETCHED_DEALS';
export const GET_CATEGORY_SET = 'GET_CATEGORY_SET';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const LOGOUT = 'LOGOUT';
export const NEW_DEAL = 'NEW_DEAL';
export const EDIT_DEAL = 'EDIT_DEAL';
export const DELETE_DEAL = 'DELETE_DEAL';

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
  .then(({ loggedOut }) => loggedOut && dispatch(logoutUser()))
}

export const logoutUser = () =>  ({
  type: LOGOUT,
});

// checking auth by the token that will be sent in the headers
export const checkAuthUser = () => (dispatch) => {
  return DealsAPI
  .checkAuthUser()
  .then(({ isAuthenticated }) => isAuthenticated ? dispatch(userAuthenticated()) : dispatch(logoutUser()))
}

export const deleteDeal = (id) => (dispatch) => {
  return DealsAPI
  .deleteDeal(id)
  .then(({ deleted }) => deleted && dispatch(dealDeleted(id)))
}

export const editDeal = (id, deal) => (dispatch) => {
  return DealsAPI
  .editDeal(id, deal)
  .then(({ edited }) => edited && dispatch(dealEdited(id, deal)))
}

export const dealEdited = (id, deal) => ({
  type: EDIT_DEAL,
  id,
  deal
});

export const dealDeleted = (id) => ({
  type: DELETE_DEAL,
  id
});

export const newDeal = (deal) => ({
  type: NEW_DEAL,
  deal
});
