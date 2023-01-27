import React, { useState, useEffect } from "react";
import base64 from 'base64-js';
import axios from "axios";
import './App.css';
import data from './data.json';

function App() {
  const [photos, setPhotos] = useState(data);
  const [selectedImage, setSelectedImage] = useState(null);
  const [poiList, setPoiList] = useState([]);
  const [inference, setInference] = useState(null);

  useEffect(() => {
    async function fetchPoi() {
      if (!selectedImage) return;
      const res = await axios.get(
        `https://api.tomtom.com/search/2/poiSearch/${selectedImage.location}.json?limit=10&key=${process.env.REACT_APP_TOMTOM_API_KEY}`
      );
      setPoiList(res.data.results);
    }
    fetchPoi();
  }, [selectedImage]);

  useEffect(() => {
    async function fetchInference() {
      if (!selectedImage) return;
      const base64Image = await getBase64Url(selectedImage.url);
      const payload = {
        data: [base64Image],
      };
      const res = await axios.post("https://heloa-fastai-nature-classifier.hf.space/api/predict", payload);
      setInference(res.data.data[0]);
    }
    fetchInference();
  }, [selectedImage]);

  const getBase64Url = (url) => {
    return fetch(url)
      .then(response => response.blob())
      .then(blob => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsDataURL(blob)
        })
      })
  }

  return (
    <div className="App">
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
      {/* Check if POI categories include: 
        important tourist attraction 
        natural tourist attraction 
        forest area
        park recreation area
        park
        arboreta botanical gardens
      */}
      {poiList.length > 0 && (
        <div>
          <h2>Points of Interest</h2>
          <ul>
            {poiList.map((poi) => (
              <li key={poi.id}>{poi.poi.categories}</li>
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

export default App;
