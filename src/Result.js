import React from "react";
import './Result.css'

const Result = () => {
  return (
    <div className="container">
      <h1 className="heading">Heading</h1>
      <div className="image-container">
        <img
          className="image"
          src="https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
          alt="placeholder"
        />
      </div>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </div>
  )
}

export default Result;