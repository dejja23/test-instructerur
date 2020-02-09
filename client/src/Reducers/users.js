import {
  GET_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER
} from '../Actions/actionTypes';

const initialState = {
  loading: true,
  users: []
};

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return {
        users: [...payload],
        loading: false
      };
    case ADD_USER:
      return {
        users: [...state.users, payload],
        loading: false
      };
    case UPDATE_USER:
      return {
        users: state.users.map(user =>
          user._id === payload.id ? payload.user : user
        )
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user._id !== payload),
        loading: false
      };

    default:
      return state;
  }
};

export default usersReducer;
