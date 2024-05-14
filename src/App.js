import React, { useState, useEffect } from 'react';
import './App.css';
import image1 from './Images/hanselandgretel.png';
import image2 from './Images/shadowpresident.png';
import image3 from './Images/hauntedschool.png';
import image4 from './Images/writtenrealms.png';
import image5 from './Images/kuzbass.jpg';
import image6 from './Images/youarebeingwatched.png';
import image7 from './Images/deadlandsurvival.png'
import TitleBar from './TitleBar';
import TrailerPlayer from './TrailerPlayer';
import FullScreenButton from './FullScreenButton';
import EpisodeModal from './EpisodeModal';

// Import other components and images here
/* AWS Links that has got to work 
 { id: 1, url: image1, website: 'http://3.7.235.231:8080/' },
  { id: 2, url: image2, website: 'https://appstream2.us-east-2.aws.amazon.com/authenticate?parameters=eyJ0eXBlIjoiQURNSU4iLCJleHBpcmVzIjoiMTcxNTQ1MDI1MSIsImF3c0FjY291bnRJZCI6IjczMDMzNTQ3NTE1NiIsInVzZXJJZCI6ImFkbWluIiwiY2F0YWxvZ1NvdXJjZSI6ImltYWdlLWJ1aWxkZXIvRXhhbXBsZUltYWdlQnVpbGRlclRFc3QiLCJmbGVldFJlZiI6ImltYWdlLWJ1aWxkZXIvRXhhbXBsZUltYWdlQnVpbGRlclRFc3QifQ%3D%3D&signature=0aXXuOrffG%2Bljz67Zl0LtPr3QVzTkeYpdzaYDFBI3mU%3D' } */

const images = [
  { id: 1, url: image1, website: 'https://www.crazygames.com/embed/gretel-and-hansel' },
  { id: 2, url: image2, website: 'https://www.crazygames.com/embed/shadow-president-illuminati' },
  { id: 3, url: image3, website: 'https://www.crazygames.com/embed/haunted-school---horror-game' },
  { id: 4, url: image4, website: 'https://writtenrealms.com/game' },
  { id: 5, url: image5, website: 'https://www.crazygames.com/embed/kuzbass-horror' },
  { id: 6, url: image6, website: 'https://www.crazygames.com/embed/you-are-being-watched---horror-game' },
  { id: 7, url: image7, website: 'https://www.crazygames.com/embed/dead-land-survival' },
  
  // Add more images here
];

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEpisodeModal, setShowEpisodeModal] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleClick = (website) => {
    setShowModal(true);
    setSelectedWebsite(website);
  };

  const handleEpisodeClick = () => {
    setShowEpisodeModal(true);
    // Set selected episode
    setSelectedEpisode({ title: "Waitlist Now!", description: "" });
  };

  const toggleFullScreen = () => {
    const elem = document.getElementById('resizableModal');
    if (elem && !document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullScreen(true); // Set isFullScreen state to true
    } else {
      document.exitFullscreen();
      setIsFullScreen(false); // Set isFullScreen state to false
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
        <button className="play-button" onClick={handleEpisodeClick}>Waitlist Here!</button> 
        <div className="play-games">
          <h1>Check out these games while you're here!</h1>
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
              style={{ height: isFullScreen ? "95vh" : "77vh" }} // Set iframe height based on isFullScreen state
            ></iframe>
            <div className="modal-buttons">
              <button className="close-button" onClick={handleCloseModal}>X</button>
              <FullScreenButton handleClick={toggleFullScreen} />
            </div>
          </div>
        </div>
      )}
      <EpisodeModal 
        isOpen={showEpisodeModal} 
        handleClose={handleCloseEpisodeModal} 
        episode={selectedEpisode} 
      />
    </div>
  );
};

export default App;
