import React from "react";
import './Result.css'

const Result = ({ image, inference, poiList }) => {
  if (!inference || !poiList.length) { return (<h1>LOADING...</h1>)}

  const { confidence } = inference.confidences.find(element => element.label === 'bird');

  let isBirdMessage = 'Let me think...';
  const parkMessage = poiList.length > 1
    ? 'Maybe one of these: '
    : 'It could be this one: '

  if (confidence > 0.7) {
    isBirdMessage = "YES! It's a bird!"
  } else if (confidence > 0.5) {
    isBirdMessage = 'I guess... ?'
  } else {
    isBirdMessage = "I don't think so..."
  }

  return (
    (<div className="container">
      <h1 className="heading">{'Is it a bird?'.toUpperCase()}</h1>
      <p className="subheading">{isBirdMessage.toUpperCase()}</p>
      <p>{'Confidence (bird): '.toUpperCase()}{confidence.toFixed(2)}</p>
      <div className="">
        <div className="image-container">
          <img
            className="image"
            src={image.url}
            alt="placeholder"
          />
        </div>
      </div>
        <p>{'PARK? ' + parkMessage.toUpperCase()}</p>
        {poiList.slice(0,2).map((item, index) => (<span key={index}>{item.name.toUpperCase()}</span>))}
    </div>)
  )
}

export default Result;