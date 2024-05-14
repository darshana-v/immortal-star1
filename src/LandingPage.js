import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube'; // Import YouTube component from react-youtube
import './LandingPage.css';
import logo from './Images/oie_transparent.png'; // Import your logo image

const LandingPage = () => {
  const opts = {
    height: '315',
    width: '560',
    playerVars: {
      autoplay: 1,
      controls: 0, // Hide player controls
      disablekb: 1,
      enablejsapi: 1,
      showinfo: 0, // Hide video title and player actions
      loop: 1, // Loop the video
      mute: 1, // Mute the video
    }
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none', // Allow clicks to pass through the overlay
    zIndex: 2, // Ensure the overlay is above the video
    background: 'transparent' // Make the overlay transparent
  };

  const youtubeContainerStyle = {
    pointerEvents: 'none', // Prevent clicks on YouTube player
  };

  const logoStyle = {
    position: 'absolute',
    top: -2,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px', // Adjust the width of the logo as needed
    height: 'auto'
  };

  return (
    <div className="landing-page" style={{ position: 'relative' }}>
      
      <div className="video-wrapper" style={youtubeContainerStyle}>
        <div style={overlayStyle}></div> {/* Transparent overlay */}
        <YouTube
          videoId="f3st1DfrvIc"
          opts={opts}
          onReady={(event) => event.target.playVideo()}
          containerClassName="youtube-container" // Added class name for styling purposes
        />
      </div>
      <br></br>
      <div className="landing-content">
      <img src={logo} alt="Logo" style={logoStyle} />
      <br></br>
        <h1 className="landing-title">Ever "played" a TV Series?</h1>
        <Link to="/app" className="try-now-button">
          Try Now!
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
