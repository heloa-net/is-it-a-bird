import React from 'react';
import './styles.css';

const Home = ({ setScreen }) => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setScreen('gallery')}>Pick image</button>
    </div>
  );
}

export default Home;
