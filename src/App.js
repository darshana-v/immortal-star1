import React from 'react';
import './App.css';
import Slider from 'react-slick'
import image1 from './minesweeper.png';
import image2 from './solitare.jpg';
import image3 from './soldier-attack-1.png'
import image4 from './writtenrealms.png';
import TitleBar from './TitleBar';
import TrailerPlayer from './TrailerPlayer';
// Import other components and images here

const images = [
  { id: 1, url: image1, website: 'https://3.7.235.231:8080/' },
  { id: 2, url: image2, website: 'https://cdn.htmlgames.com/PegSolitaire/' },
  { id: 3, url: image3, website: 'https://cdn.htmlgames.com/SoldierAttack1/' },
  { id: 4, url: image4, website: 'https://writtenrealms.com/game' },
  // Add more images here
];

class App extends React.Component {
  state = {
    showModal: false,
    selectedWebsite: null,
  };

  handleClick = (website) => {
    this.setState({ showModal: true, selectedWebsite: website });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedWebsite: null });
  };

  componentDidMount() {
    this.initializeResizableModal();
  }

  initializeResizableModal = () => {
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

  render() {
    return (
      <div className="App">
        <TitleBar />
        <div className="main-content">
          <TrailerPlayer />
          <div className = "play-games">
            <h1>Check out some other games!</h1>
          </div>
          <div className="content">
            <div className="image-container">
              {images.map(image => (
                <img
                  key={image.id}
                  src={image.url}
                  alt={`Image ${image.id}`}
                  onClick={() => this.handleClick(image.website)}
                />
              ))}
            </div>
          </div>
        </div>
        {this.state.showModal && (
          <div className="modal-overlay">
            <div className="modal" id="resizableModal">
              <iframe
                title="Website"
                src={this.state.selectedWebsite}
                allowFullScreen
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              ></iframe>
              <button onClick={this.handleCloseModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
