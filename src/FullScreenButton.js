import React from 'react';

const FullScreenButton = ({ handleClick }) => {
  return (
    <button className="fullscreen-button" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-fullscreen"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <path d="M14 10v4m0 0h-4m4 0l-4-4" />
      </svg>
    </button>
  );
};

export default FullScreenButton;
