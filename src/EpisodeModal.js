import React from 'react';

const EpisodeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="episode-modal">
      <div className="episode-modal-content">
        <h2 className="episode-modal-title">Episode Modal</h2>
        <p>This is a simple episode modal.</p>
        <div className="episode-modal-buttons">
          <button className="episode-modal-close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default EpisodeModal;
