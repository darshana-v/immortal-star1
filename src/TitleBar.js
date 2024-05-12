import React from 'react';
import image1 from './Images/oie_transparent.png'

function TitleBar() {
  return (
    <div className="title-bar">
      <img src = {image1} alt="Immortal Star Logo" className="logo" />
      <div className="navigation">
        <a href="#">Home</a>
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
      </div>
    </div>
  );
}

export default TitleBar;