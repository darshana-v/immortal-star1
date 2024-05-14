import React from 'react';
import './FullScreenButton.css';

const FullScreenButton = ({ handleClick }) => {
  return (
    <button className="fullscreen-button" onClick={handleClick}>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-custom-fullscreen"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 3H19C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6C2 4.34315 3.34315 3 5 3ZM15 9L20 9M20 9V4M20 9H15M20 9L15 14M9 15L4 15M4 15V20M4 15H9M4 15L9 10"/>
    </svg>
    </button>
  );
};

export default FullScreenButton;
