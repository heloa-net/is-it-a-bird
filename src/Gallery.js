import React from "react";
import './styles.css';

const Gallery = () => {
  return (
    <div>
      <h1>Bird Gallery</h1>
      {selectedImage && (
        <div>
          <img src={selectedImage.url} />
          <p>
            <span>by </span>
            <a href={`https://unsplash.com/@${selectedImage.photographer}`}>{selectedImage.photographer}</a>
            <br />
            {selectedImage.location}
          </p>
        </div>
      )}
      {poiList.length > 0 && (
        <div>
          <h2>Points of Interest</h2>
          <ul>
            {poiList.map((poi) => (
              <div key={poi.id}>
                <li key={poi.name}>{poi.name}</li>
                {
                  Array.from(poi.categories).map((category, index) => {
                    return (<li key={category}>{category}</li>)
                  }
                  )
                }
              </div>
            ))}
          </ul>
        </div>
      )}
      {inference !== null && (
        <div>
          <h4>Is it a bird?</h4>
          <p>{inference.label === 'bird' ? 'Yes!' : `No! It's a ${inference.confidences[0].label}!`}</p>
          {/* Add "...I guess" to low confidence <75% */}
          <p>Confidence: {(inference.confidences[0].confidence * 100).toFixed(1)}%</p>
        </div>
      )}
      <div className="grid-container">
        {photos.map((photo, index) => (
          <div key={index} className="grid-item">
            <img src={photo.url} onClick={() => setSelectedImage(photo)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;