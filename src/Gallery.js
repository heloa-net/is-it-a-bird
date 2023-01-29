import React, { useState } from "react";
import './Gallery.css'

const Gallery = ({ photos }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="grid-container">
      {photos.slice(0, 8).map((photo, index) => (
        <div className="grid-item" key={index}>
          <img src={photo.url} onClick={() => setSelectedImage(photo)} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

