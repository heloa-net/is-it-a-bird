import React from "react";
import './Gallery.css'

const Gallery = ({ photos, onSelect }) => {

  return (
    <div className="grid-container">
      {photos.slice(0, 8).map((photo, index) => (
        <div className="grid-item" key={index}>
          <img src={photo.url} onClick={() => onSelect(photo)} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

