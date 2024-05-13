// EpisodeModal.js
import React from 'react';

const EpisodeModal = ({ isOpen, handleClose, episode }) => {
  return (
    isOpen && (
      <div className="episode-modal">
        <div className="episode-modal-content">
          <h2 className="episode-modal-title">{episode.title}</h2>
          <p>{episode.description}</p>
          {/* Add additional information here */}
          <div className="episode-modal-buttons">
            <button className="episode-modal-close-btn" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    )
  );
};

export default EpisodeModal;
