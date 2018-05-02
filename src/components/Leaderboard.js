import React, { Component } from 'react';

class Leaderboard extends Component {
  render() {
    return (
      <div className="leaderboard">
        <h2 className="leaderboard__title">{this.props.title}</h2>
        <ul className="leaderboard-list">
          <li className="leaderboard-list__entry">
            <span className="leaderboard-list__username">EPIC_FAILlZz</span>
            <span className="leaderboard-list__score">37056</span>
          </li>
          <li className="leaderboard-list__entry">
            <span className="leaderboard-list__username">QueenUnicorn4Dayz</span>
            <span className="leaderboard-list__score">35320</span>
          </li>
          <li className="leaderboard-list__entry">
            <span className="leaderboard-list__username">GammaTitan</span>
            <span className="leaderboard-list__score">12403</span>
          </li>
          <li className="leaderboard-list__entry">
            <span className="leaderboard-list__username">Marcuss000</span>
            <span className="leaderboard-list__score">9352</span>
          </li>
          <li className="leaderboard-list__entry">
            <span className="leaderboard-list__username">Cosmic_nova</span>
            <span className="leaderboard-list__score">6573</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Leaderboard;
