import React, { useEffect, useState } from "react";
import Thumbnail from "./Thumbnail";
import Fuse from "fuse.js";
import { connect } from "react-redux";

import "../styles/lightbox.css";
import PhotoViewer from "./PhotoViewer";

const Lightbox = ({ photos, filter }) => {
  const [photosArr, setPhotosArr] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    setPhotosArr(Object.values(photos));
  }, [photos]);

  useEffect(() => {
    if (filter === "") {
      setFilteredPhotos(photosArr);
      return;
    }
    const photoMeta = [];
    photosArr.forEach((photo) => {
      if (typeof photo.metadata === "string")
        photoMeta.push({ photo: photo, metadata: photo.metadata.split(",") });
    });
    setFilteredPhotos(
      new Fuse(photoMeta, {
        keys: ["metadata", "photo.name"],
      })
        .search(filter)
        .map((i) => i.item.photo)
    );
  }, [filter, photosArr]);

  return (
    <div className="lightbox">
      <ul>
        {Array.isArray(filteredPhotos) ? (
          filteredPhotos.map((photo) => {
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
    filter: state.lightbox.filter,
  };
};

export default connect(MapStateToProps, null)(Lightbox);
