import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  UPDATE_USERS_REQUEST,
  UPDATE_USERS_SUCCESS,
  UPDATE_USERS_ERROR,
  SELECT_USER,
  TOGGLE_SELECT_USERS
} from './constants';

export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST,
});

export const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: users
});

export const getUsersError = error => ({
  type: GET_USERS_ERROR,
  payload: error
});

export const updateUsersRequest = user => ({
  type: UPDATE_USERS_REQUEST,
  user
});

export const updateUsersSuccess = (user) => ({
  type: UPDATE_USERS_SUCCESS,
  payload: user
});

export const updateUsersError = error => ({
  type: UPDATE_USERS_ERROR,
  payload: error
});

export const selectUser = userId => ({
  type: SELECT_USER,
  payload: userId
});

export const toggleSelectedUsers = checked => ({
  type: TOGGLE_SELECT_USERS,
  payload: checked
});
