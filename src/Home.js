import React from 'react';
import './styles.css';

const Home = ({ setScreen }) => {
  return (
    <div className="homeContainer">
      <h1>IS IT A BIRD?</h1>
      <button className="galleryButton" onClick={() => setScreen('gallery')}>
        PICK IMAGE</button>
    </div>
  );
}

export default Home;
