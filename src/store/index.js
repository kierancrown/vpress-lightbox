import { createStore, combineReducers } from "redux";
import photoslistReducer from "./reducers/photolistReducer";

const reducer = combineReducers({ lightbox: photoslistReducer });

const initialState = {
  lightbox: {
    photos: [],
    openPhoto: null,
    filter: "",
  },
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
