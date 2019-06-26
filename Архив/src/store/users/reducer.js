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

const initialState = {
  users: [],
  isLoading: false,
  error: ''
};


export const users = (state = initialState, action) => {
  switch (action.type) {

    case GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload
      };

    case GET_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case UPDATE_USERS_REQUEST:
      return {
        ...state,
       isLoading: true
      };

    case UPDATE_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: state.users.map(user => user.id === action.payload.id ? action.payload : user )
      };

    case UPDATE_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case SELECT_USER:
      return {
        ...state,
        users: state.users.map(user => user.id === action.payload ? { ...user, selected: !user.selected } : user )
      };

    case TOGGLE_SELECT_USERS:
      return {
        ...state,
        users: state.users.map(user => ({ ...user, selected: action.payload}))
      };

    default:
      return state;
  }
};
