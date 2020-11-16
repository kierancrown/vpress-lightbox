import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { setFilter } from "../store/actions/updatePhotos";

import "../styles/Header.scss";

const Header = ({ setFilter }) => {
  const filterInput = useRef(null);

  return (
    <div id="header">
      <h1>Photo Gallery App</h1>
      <div
        id="filter-container"
        onClick={() => {
          if (filterInput.current) filterInput.current.focus();
        }}
      >
        <input
          type="text"
          ref={filterInput}
          placeholder="Filter photos..."
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>
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

export default connect(null, MapDispatchToProps)(Header);
