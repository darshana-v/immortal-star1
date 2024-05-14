import React from 'react';
import ReactDOM from 'react-dom';
import image1 from './Images/wip.jpg';
import './index.css';
import AppRouter from './Router'; // Import the AppRouter component
import reportWebVitals from './reportWebVitals';

// Function to display a message if the device is mobile
function displayMobileMessage() {
  const message = document.createElement('div');
  message.textContent = "Sorry, this website is not optimized for mobile devices....Yet!";
  message.style.position = 'fixed';
  message.style.top = '50%';
  message.style.left = '50%';
  message.style.transform = 'translate(-50%, -50%)';
  message.style.background = 'white';
  message.style.padding = '20px';
  message.style.border = '2px solid black';
  message.style.borderRadius = '10px';
  message.style.zIndex = '9999';
// Creating and configuring the image
const image = document.createElement('img');
image.src = image1; // Provide the path to your image
image.style.width = '200px'; // Adjust the width as needed
image.style.height = 'auto'; // Maintain aspect ratio

// Appending the image to the message
message.appendChild(image);

  document.body.appendChild(message);
}

// Check if the user agent indicates a mobile device
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Check if the device is mobile and display the message
if (isMobile) {
  displayMobileMessage();
} else {
    ReactDOM.render(
        <React.StrictMode>
          <AppRouter />
        </React.StrictMode>,
        document.getElementById('root')
      );
      
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
