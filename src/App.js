import { useState } from 'react';
import './App.css';
import data from './data.json';

function App() {
  const [photos, setPhotos] = useState(data);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <h1>Bird Gallery</h1>
      {selectedImage && (
        <div>
          <img src={selectedImage.url}/>
          <p>
              <span>by </span>
              <a href={`https://unsplash.com/@${selectedImage.photographer}`}>{selectedImage.photographer}</a>
              <br />
              {selectedImage.location}
            </p>
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

export default App;
