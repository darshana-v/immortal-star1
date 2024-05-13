import React from 'react';
import YouTube from 'react-youtube';
import './TrailerPlayer.css'; // Import CSS for styling

class TrailerPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    };
  }

  // Event listener to update dimensions on window resize
  handleResize = () => {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const videoId = 'brJqHnXmpgE'; // Replace 'YOUR_VIDEO_ID' with your actual video ID

    // Calculate dimensions based on window size
    const playerWidth = this.state.windowWidth;
    const playerHeight = this.state.windowHeight;

    const opts = {
      height: playerHeight.toString(), // Set height to cover entire screen
      width: playerWidth.toString(),    // Set width to cover entire screen
      playerVars: {
        autoplay: 1,
        controls: 0, // Hide player controls
        disablekb: 1,
        enablejsapi: 1,
        showinfo: 0, // Hide video title and player actions
        loop: 1, // Loop the video
        mute: 1, // Mute the video
      },
    };

    return (
        <div className="trailer-player-container">
          <YouTube videoId={videoId} opts={opts} className="fullscreen-video" />
          <div className="overlay-text"><p> <h4>The Dark Mod Episodes: Coming Soon!</h4></p> 
          <p><h5>Play your favorite games as episodes, now on Immortal Star!</h5></p> 
          </div>
        </div>
      );
  }
}

export default TrailerPlayer;
