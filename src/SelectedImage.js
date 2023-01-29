import React from "react";

const SAMPLE = {
  "url": "https://images.unsplash.com/photo-1513173125192-da282c9a64ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
  "photographer": "paul_nic",
  "location": "Hyde Park, London, United Kingdom"
}

const SelectedImage = ({ image = SAMPLE }) => {
  // Result
  // Is it a bird?
  // What is it?
  // Confidence
  // Is it a park?
  // Which park?
  // Big image
  // Image credits
  // Restart

  /*
  Inference
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
  

  {inference !== null && (
    <div>
      <h4>Is it a bird?</h4>
      <p>{inference.label === 'bird' ? 'Yes!' : `No! It's a ${inference.confidences[0].label}!`}</p>
      // Add "...I guess" to low confidence <75% 
      <p>Confidence: {(inference.confidences[0].confidence * 100).toFixed(1)}%</p>
    </div>
  )}
  */

  /*
  Credits

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
  */

  return (
    <div>
      <h1>YES!</h1>
      <h2>Confidence</h2>
    </div>
  )
}

export default SelectedImage