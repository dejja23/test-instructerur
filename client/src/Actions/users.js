import axios from 'axios';
import {
  GET_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER
} from '../Actions/actionTypes';

export const getUsers = searchByName => async dispatch => {
  try {
    const res = searchByName
      ? await axios.get(`/users?name=${searchByName}`)
      : await axios.get(`/users`);
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const addUser = (
  name,
  surName,
  birthPlace,
  birthYear
) => async dispatch => {
  try {
    const res = await axios.post('/users', {
      name,
      surName,
      birthPlace,
      birthYear
    });
    dispatch({
      type: ADD_USER,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (
  id,
  name,
  surName,
  birthPlace,
  birthYear
) => async dispatch => {
  try {
    const res = await axios.put(`/users/${id}`, {
      name,
      surName,
      birthPlace,
      birthYear
    });
    dispatch({
      type: UPDATE_USER,
      payload: { id, user: res.data }
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = id => async dispatch => {
  try {
    await axios.delete(`/users/${id}`);
    dispatch({
      type: DELETE_USER,
      payload: id
    });
  } catch (error) {
    console.log(error);
  }
};
