export const UPDATE_PHOTOS = "UPDATE_PHOTOS";
export const OPEN_PHOTO = "OPEN_PHOTO";
export const CLOSE_PHOTO = "CLOSE_PHOTO";
export const SET_FILTER = "SET_FILTER";

const updatePhotos = (payload) => ({
  type: UPDATE_PHOTOS,
  payload,
});

const openPhotoViewer = (payload) => ({
  type: OPEN_PHOTO,
  payload,
});

const closePhotoViewer = () => ({
  type: CLOSE_PHOTO,
});

const setFilter = (payload) => ({
  type: SET_FILTER,
  payload,
});

export { updatePhotos, openPhotoViewer, closePhotoViewer, setFilter };
