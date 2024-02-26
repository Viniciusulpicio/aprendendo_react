import React from 'react';
import './style.css';
import Menu from './Menu';

function Home() {
  return (
    <div id='home'>
      <Menu />
      <img src="/img/home_image.jpg" alt="fundo" style={{ width: '100%', height: 'auto', margin: 0, padding: 0 }} />
    </div>
  );
}

export default Home;
