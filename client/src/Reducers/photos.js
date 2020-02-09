import { GET_PHOTOS, ADD_PHOTO, DELETE_PHOTO } from '../Actions/actionTypes';

const initialState = {
  loading: true,
  photos: []
};

const photosReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PHOTOS:
      return {
        photos: [...payload],
        loading: false
      };

    case ADD_PHOTO:
      return {
        photos: [...state.photos, payload],
        loading: false
      };

    case DELETE_PHOTO:
      return {
        ...state,
        photos: state.photos.filter(photo => photo._id !== payload),
        loading: false
      };

    default:
      return state;
  }
};

export default photosReducer;
