// EpisodeModal.js
// This is ideally supposed to be for listing episodes as you click on 'Play now'
//Right now it is being used as a firebase service to track if people are interested or not
// WORK IN PROGRESS
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './EpisodeModal.css';

const EpisodeModal = ({ isOpen, handleClose, episode }) => {
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [waitlistConfirmation, setWaitlistConfirmation] = useState('');

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC88fzrx7FD17L8ola1znTzOmXCeKytvEs",
    authDomain: "immortalstar-2b0a7.firebaseapp.com",
    projectId: "immortalstar-2b0a7",
    storageBucket: "immortalstar-2b0a7.appspot.com",
    messagingSenderId: "890400306033",
    appId: "1:890400306033:web:6ef4912f5e9012dfe43cd0",
    measurementId: "G-YNLF36ENS2"
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const db = firebase.firestore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection('waitlist').add({
        email: email,
        comments: comments,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setWaitlistConfirmation('You have been added to the waitlist!');
      // Clear the form fields after successful submission
      setEmail('');
      setComments('');
    } catch (error) {
      console.error('Error adding to waitlist:', error);
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
              <label htmlFor="email">Email:</label>
              <input
                type="email"
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
