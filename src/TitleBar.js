import React from 'react';
import image1 from './Images/oie_transparent.png'

function TitleBar() {
  return (
    <div className="title-bar">
      <img src = {image1} alt="Immortal Star Logo" className="logo" />
      <div className="navigation">
        <a href="#">Home</a>
        <a href="https://www.immortalstar.one/">What is this all about?</a>
      </div>
    </div>
  );
}

export default TitleBar;