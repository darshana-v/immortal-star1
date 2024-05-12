import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from 'react-slick';
import image1 from './Images/minesweeper.png';
import image2 from './Images/Tdm_logo_bbg.jpg';
import image3 from './Images/soldier-attack-1.png';
import image4 from './Images/writtenrealms.png';
import TitleBar from './TitleBar';
import TrailerPlayer from './TrailerPlayer';
import FullScreenButton from './FullScreenButton';

// Import other components and images here

const images = [
  { id: 1, url: image1, website: 'http://3.7.235.231:8080/' },
  { id: 2, url: image2, website: 'https://appstream2.us-east-2.aws.amazon.com/authenticate?parameters=eyJ0eXBlIjoiQURNSU4iLCJleHBpcmVzIjoiMTcxNTQ1MDI1MSIsImF3c0FjY291bnRJZCI6IjczMDMzNTQ3NTE1NiIsInVzZXJJZCI6ImFkbWluIiwiY2F0YWxvZ1NvdXJjZSI6ImltYWdlLWJ1aWxkZXIvRXhhbXBsZUltYWdlQnVpbGRlclRFc3QiLCJmbGVldFJlZiI6ImltYWdlLWJ1aWxkZXIvRXhhbXBsZUltYWdlQnVpbGRlclRFc3QifQ%3D%3D&signature=0aXXuOrffG%2Bljz67Zl0LtPr3QVzTkeYpdzaYDFBI3mU%3D' },
  { id: 3, url: image3, website: 'https://cdn.htmlgames.com/SoldierAttack1/' },
  { id: 4, url: image4, website: 'https://writtenrealms.com/game' },
  
  // Add more images here
];

const EpisodeModal = ({ showEpisodeModal, handleCloseEpisodeModal }) => (
  showEpisodeModal && (
    <div className="episode-modal">
      <div className="episode-modal-content">
        <h2 className="episode-modal-title">Episode Modal</h2>
        <p>This is a simple episode modal.</p>
        <div className="episode-modal-buttons">
          <button className="episode-modal-close-btn" onClick={handleCloseEpisodeModal}>Close</button>
        </div>
      </div>
    </div>
  )
);

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEpisodeModal, setShowEpisodeModal] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const handleClick = (website) => {
    setShowModal(true);
    setSelectedWebsite(website);
  };

  const handleEpisodeClick = () => {
    setShowEpisodeModal(true);
  };

  const toggleFullScreen = () => {
    const elem = document.getElementById('resizableModal');
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedWebsite(null);
  };

  const handleCloseEpisodeModal = () => {
    setShowEpisodeModal(false);
    setSelectedEpisode(null);
  };

  useEffect(() => {
    const initializeResizableModal = () => {
      const modal = document.getElementById('resizableModal');
      if (modal) {
        let isResizing = false;
        let lastDownX = 0;

        modal.addEventListener('mousedown', (e) => {
          if (e.target.classList.contains('modal')) {
            isResizing = true;
            lastDownX = e.clientX;
          }
        });

        window.addEventListener('mousemove', (e) => {
          if (!isResizing) return;
          modal.style.width = parseInt(getComputedStyle(modal, '').width) + (e.clientX - lastDownX) + 'px';
          lastDownX = e.clientX;
        });

        window.addEventListener('mouseup', () => {
          isResizing = false;
        });
      }
    };

    initializeResizableModal();

    return () => {
      // Clean up event listeners if needed
    };
  }, []);

  return (
    <div className="App">
      <TitleBar />
      <div className="main-content">
        <TrailerPlayer />
        <button className="play-button" onClick={handleEpisodeClick}>Play Now</button> {/* Remove () */}
        <div className="play-games">
          <h1>Check out some other games!</h1>
        </div>
        <div className="content">
          <div className="image-container">
            {images.map(image => (
              <img
                key={image.id}
                src={image.url}
                alt={`Image ${image.id}`}
                onClick={() => handleClick(image.website)}
              />
            ))}
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal" id="resizableModal">
            <iframe
              title="Website"
              src={selectedWebsite}
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock"
            ></iframe>
            <div className="modal-buttons">
              <button className = "close-button" onClick={handleCloseModal}>X</button>
              <FullScreenButton handleClick={toggleFullScreen} />
            </div>
          </div>
        </div>
      )}
      <EpisodeModal showEpisodeModal={showEpisodeModal} handleCloseEpisodeModal={handleCloseEpisodeModal} />
    </div>
  );
};

export default App;
