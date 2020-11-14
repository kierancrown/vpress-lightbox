import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../store/actions/updatePhotos";

const Sidebar = ({ setFilter }) => {
  return (
    <div id="sidebar">
      <h1>Photo Gallery App</h1>
      <input
        type="text"
        placeholder="Filter photos..."
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
    </div>
  );
};

const MapDispatchToProps = (dispatch) => {
  return {
    setFilter: (text) => {
      dispatch(setFilter(text));
    },
  };
};

export default connect(null, MapDispatchToProps)(Sidebar);
