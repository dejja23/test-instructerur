import axios from 'axios';
import { GET_PHOTOS, ADD_PHOTO, DELETE_PHOTO } from '../Actions/actionTypes';

export const getPhotos = (user_id, searchByTitle) => async dispatch => {
  try {
    const res = searchByTitle
      ? await axios.get(`/photos/${user_id}?title=${searchByTitle}`)
      : await axios.get(`/photos/${user_id}`);
    dispatch({
      type: GET_PHOTOS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const addPhoto = (user_id, title, url) => async dispatch => {
  try {
    const res = await axios.post('/photos', { user_id, title, url });
    dispatch({
      type: ADD_PHOTO,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePhoto = id => async dispatch => {
  try {
    await axios.delete(`/photos/${id}`);
    dispatch({
      type: DELETE_PHOTO,
      payload: id
    });
  } catch (error) {
    console.log(error);
  }
};
