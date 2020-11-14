import React, { useState } from "react";

import { connect } from "react-redux";
import { openPhotoViewer } from "../store/actions/updatePhotos";

const Thumbnail = ({ photo, openPhotoViewer }) => {
  const [brokenImage, setBrokenImage] = useState(false);
  return (
    <li
      className="thumbnail"
      onClick={() => {
        openPhotoViewer(photo);
      }}
    >
      <img
        src={brokenImage ? "/images/broken.svg" : photo.thumbnailurl}
        style={{ objectFit: brokenImage ? "cover" : "none" }}
        alt={photo.name}
        loading="lazy"
        onError={() => {
          setBrokenImage(true);
        }}
      />
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
