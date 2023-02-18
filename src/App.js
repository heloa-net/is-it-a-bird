import React, { useState, useEffect } from "react";
import axios from "axios";
import ComputerScreen from "./ComputerScreen";
import Gallery from './Gallery';
import data from './data.json';
import SelectedImage from './SelectedImage';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inference, setInference] = useState(null);

  // Note: HuggingFace may be offline and take time to start
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
      <ComputerScreen>
        {inference
        ? <SelectedImage selectedImage={selectedImage} inference={inference} />
        : <Gallery photos={data} onSelect={setSelectedImage} />}
      </ComputerScreen>
  );
}

export default App;
