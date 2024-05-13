// EpisodeModal.js
// This is ideally supposed to be for listing episodes as you click on 'Play now'
//Right now it is being used as a mailchimp service (kinda)
// WORK IN PROGRESS
import React, { useState } from 'react';

const EpisodeModal = ({ isOpen, handleClose, episode }) => {
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [waitlistConfirmation, setWaitlistConfirmation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, comments }), // Change 'name' to 'email'
      });

      if (response.ok) {
        setWaitlistConfirmation('You have been added to the waitlist!');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    isOpen && (
      <div className="episode-modal">
        <div className="episode-modal-content">
          <h2 className="episode-modal-title">{episode.title}</h2>
          <p>{episode.description}</p>
          {/* Waitlist Interest Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label> {/* Change label from 'Name' to 'Email' */}
              <input
                type="email" // Change input type to 'email'
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comments:</label>
              <textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          {/* End of Waitlist Interest Form */}
          {waitlistConfirmation && <p>{waitlistConfirmation}</p>}
          <div className="episode-modal-buttons">
            <button className="episode-modal-close-btn" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    )
  );
};

export default EpisodeModal;
