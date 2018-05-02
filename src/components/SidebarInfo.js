import React, { Component } from 'react';
import musicLevelOne from '../assets/audio/music-level-0.mp3';


class SidebarInfo extends Component {
  componentDidMount() {
    this.backgroundMusic();
  }

  backgroundMusic() {
    const levelOneMusic = new Audio(musicLevelOne);

    levelOneMusic.play();
  };
  
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default SidebarInfo;
