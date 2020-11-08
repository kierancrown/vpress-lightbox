import { UPDATE_PHOTOS } from "../actions/updatePhotos";

const photolistReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_PHOTOS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default photolistReducer;
