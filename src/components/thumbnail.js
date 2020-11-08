import React from "react";

import { connect } from "react-redux";
import { openPhotoViewer } from "../store/actions/updatePhotos";

const Thumbnail = ({ photo, openPhotoViewer }) => {
  return (
    <li
      className="thumbnail"
      onClick={() => {
        openPhotoViewer(photo);
      }}
    >
      <img src={photo.thumbnailurl} alt={photo.name} loading="lazy" />
      <div className="thumbnail-detail">{photo.name}</div>
    </li>
  );
};

const MapDispatchToProps = (dispatch) => {
  return {
    openPhotoViewer: (photo) => {
      dispatch(openPhotoViewer(photo));
    },
  };
};

export default connect(null, MapDispatchToProps)(Thumbnail);
