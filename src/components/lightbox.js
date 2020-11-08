import React from "react";
import Thumbnail from "./thumbnail";

import { connect } from "react-redux";

import "../styles/lightbox.css";
import PhotoViewer from "./photoviewer";

const Lightbox = ({ photos }) => {
  const photosArr = Object.values(photos);
  return (
    <div className="lightbox">
      <ul>
        {Array.isArray(photosArr) ? (
          photosArr.map((photo) => {
            return <Thumbnail key={photo.id} photo={photo} />;
          })
        ) : (
          <li>No photos</li>
        )}
        <li></li>
      </ul>
      <PhotoViewer />
    </div>
  );
};

const MapStateToProps = (state) => {
  return {
    photos: state.lightbox.photos,
  };
};

export default connect(MapStateToProps, null)(Lightbox);
