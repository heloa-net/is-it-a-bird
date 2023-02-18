import React from "react";

const SAMPLE = {
  "url": "https://images.unsplash.com/photo-1513173125192-da282c9a64ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
  "photographer": "paul_nic",
  "location": "Hyde Park, London, United Kingdom"
}

const SelectedImage = ({ image = SAMPLE, inference }) => {
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
  Credits
  */

  return (
    <div>
      <h1>SelectedImage</h1>
      {/* <h2>{JSON.stringify(inference)}</h2> */}

      {/* {image && (
        <div>
          <img src={image.url} />
          <p>
            <span>by </span>
            <a href={`https://unsplash.com/@${image.photographer}`}>{image.photographer}</a>
            <br />
            {image.location}
          </p>
        </div>
      )} */}
    </div>
  )
}

export default SelectedImage