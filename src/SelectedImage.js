import React from "react";

const SelectedImage = ({ image, inference }) => {
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
      {
        inference
          ? <>
            <h1>SelectedImage</h1>
            <h2>{JSON.stringify(inference)}</h2>
            {image && (
              <div>
                <img src={image.url} />
                <p>
                  <span>by </span>
                  <a href={`https://unsplash.com/@${image.photographer}`}>{image.photographer}</a>
                  <br />
                  {image.location}
                </p>
              </div>
            )}
          </>
          : <h1>Loading...</h1>
      }

    </div>
  )
}

export default SelectedImage