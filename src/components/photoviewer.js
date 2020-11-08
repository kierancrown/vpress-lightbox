import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { closePhotoViewer } from "../store/actions/updatePhotos";

import { CloseIcon, LoadingIcon, InfoIcon } from "./icons";

const PhotoViewer = ({ openPhoto, closePhotoViewer }) => {
  const [loading, setLoading] = useState(true);
  const [showMetadata, setShowMetadata] = useState(true);

  const escKeyPressed = (e) => {
    if (e.keyCode === 27) closePhotoViewer();
  };

  const toggleMetaData = () => {
    setShowMetadata(!showMetadata);
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
      <InfoIcon
        className="info-btn"
        fontSize={20}
        width={28}
        height={28}
        onClick={toggleMetaData}
      />
      {openPhoto !== null ? (
        <>
          <div className="img-container">
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
          </div>
          <div className={`metadata ${showMetadata ? "expanded" : ""}`}>
            <h4>{openPhoto.name}</h4>
            <p>Mimetype: {openPhoto.mimetype}</p>
            <p>Metadata: {openPhoto.metadata}</p>
          </div>
        </>
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
