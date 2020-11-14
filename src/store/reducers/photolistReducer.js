import {
  UPDATE_PHOTOS,
  OPEN_PHOTO,
  CLOSE_PHOTO,
  SET_FILTER,
} from "../actions/updatePhotos";

const photolistReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_PHOTOS:
      return { ...state, photos: payload };
    case OPEN_PHOTO:
      return { ...state, openPhoto: payload };
    case CLOSE_PHOTO:
      return { ...state, openPhoto: null };
    case SET_FILTER:
      return { ...state, filter: payload };
    default:
      return state;
  }
};

export default photolistReducer;
