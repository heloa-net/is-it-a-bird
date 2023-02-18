import React from "react";
import './Gallery.css'

const Gallery = ({ photos, onSelect, setScreen }) => {

  const handleClickPhoto = (photo) => {
    onSelect(photo);
    setScreen('result');
  }

  return (
    <div className="grid-container">
      {photos.slice(0, 8).map((photo, index) => (
        <div className="grid-item" key={index}>
          <img src={photo.url} onClick={photo => handleClickPhoto(photo)} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

