import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { closePhotoViewer } from "../store/actions/updatePhotos";

import CloseIcon from "./closeIcon";
import LoadingIcon from "./loadingIcon";

const PhotoViewer = ({ openPhoto, closePhotoViewer }) => {
  const [loading, setLoading] = useState(true);

  const escKeyPressed = (e) => {
    if (e.keyCode === 27) closePhotoViewer();
  };

  useEffect(() => {
    document.addEventListener("keydown", escKeyPressed, false);
    return () => {
      document.removeEventListener("keydown", escKeyPressed, false);
    };
  });

  return (
    <div className={`photo-viewer ${openPhoto ? "open" : ""}`}>
      <CloseIcon
        className="close-btn"
        fontSize={28}
        onClick={closePhotoViewer}
      />
      {openPhoto !== null ? (
        <img
          style={{ display: loading ? "none" : "block" }}
          alt={openPhoto.name}
          src={openPhoto.fileurl}
          onLoad={() => {
            setLoading(false);
          }}
          onLoadStart={() => {
            setLoading(true);
          }}
        />
      ) : (
        <span>Unable to load photo</span>
      )}
      {loading ? <LoadingIcon /> : <></>}
    </div>
  );
};

const MapStateToProps = (state) => {
  return {
    openPhoto: state.lightbox.openPhoto,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    closePhotoViewer: () => {
      dispatch(closePhotoViewer());
    },
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(PhotoViewer);
