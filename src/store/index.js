import { createStore, combineReducers } from "redux";
import photoslistReducer from "./reducers/photolistReducer";

const reducer = combineReducers({ photos: photoslistReducer });

const initialState = {
  photos: [],
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
