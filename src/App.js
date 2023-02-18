import React, { useState, useEffect } from "react";
import axios from "axios";
import ComputerScreen from "./ComputerScreen";
import Gallery from './Gallery';
import data from './data.json';
import SelectedImage from './SelectedImage';
import LocationInfo from "./LocationInfo";
import poi_categories from './poi_categories.json';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inference, setInference] = useState(null);
  const [poiList, setPoiList] = useState([]);

  // TODO: limit API key at TomTom's website
  useEffect(() => {
    async function fetchPoi() {
      if (!selectedImage) return;
      const res = await axios.get(
        `https://api.tomtom.com/search/2/poiSearch/${selectedImage.location}.json?limit=10&key=${process.env.REACT_APP_TOMTOM_API_KEY}`
      );

      const filteredResults = res.data.results
        .filter(result => result.poi.categories.some(category => poi_categories.includes(category)))
        .map(result => ({
          id: result.id,
          name: result.poi.name,
          categories: new Set(result.poi.categories.filter(category => poi_categories.includes(category)))
        }))
        .reduce((acc, curr) => {
          const key = curr.name;
          if (!acc[key]) {
            acc[key] = {
              name: key,
              categories: curr.categories
            };
          } else {
            curr.categories.forEach(category => acc[key].categories.add(category));
          }
          return acc;
        }, {});

      const items = Object.values(filteredResults)
      setPoiList(items);
      console.log({ items });
    }
    fetchPoi();
  }, [selectedImage]);

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

  // TODO: convert to async function
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
        ? <>
          <LocationInfo poiList={poiList} />
          <SelectedImage selectedImage={selectedImage} inference={inference} />
        </>
        : <Gallery photos={data} onSelect={setSelectedImage} />}
    </ComputerScreen>
  );
}

export default App;
