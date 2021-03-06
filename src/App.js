import React, { useEffect } from "react";
import "./styles/App.scss";

import Lightbox from "./components/Lightbox";
import Header from "./components/Header";

import { connect } from "react-redux";
import { updatePhotos } from "./store/actions/updatePhotos";

const App = ({ setPhotos }) => {
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        let res = await fetch(
          "https://run.mocky.io/v3/525464b2-740b-40f8-9fb4-1cf0a6be1a6d"
        );
        res = await res.json();
        setPhotos(res);
      } catch (error) {
        throw error;
      }
    };
    fetchPhotos();
  }, [setPhotos]);

  return (
    <div className="App theme-dark">
      <Header />
      <Lightbox />
    </div>
  );
};

const MapDispatchToProps = (dispatch) => {
  return {
    setPhotos: (photos) => {
      dispatch(updatePhotos(photos));
    },
  };
};

export default connect(null, MapDispatchToProps)(App);
