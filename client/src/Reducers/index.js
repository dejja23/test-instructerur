import { combineReducers } from 'redux';
import usersReducer from './users';
import photosReducer from './photos';

export default combineReducers({ usersReducer, photosReducer });
