import React, { useState, useEffect } from "react";
import axios from "axios";
import './Gallery.css';
import data from './data.json';

const Gallery = () => {
  const [photos, _] = useState(data);
  const [selectedImage, setSelectedImage] = useState(null);
  const [inference, setInference] = useState(null);

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
    <div>
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