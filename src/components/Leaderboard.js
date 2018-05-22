import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';


class Leaderboard extends Component {
  // componentDidMount() {
  //   const config = {
  //     apiKey: "AIzaSyBf9kfXOKH-TxdS_B4dqDPedDOkiE5f0EE",
  //     authDomain: "ultimate-pizza-time.firebaseapp.com",
  //     databaseURL: "https://ultimate-pizza-time.firebaseio.com",
  //     projectId: "ultimate-pizza-time",
  //     storageBucket: "ultimate-pizza-time.appspot.com",
  //     messagingSenderId: "988136295522"
  //   };

  //   firebase.initializeApp(config);

  //   const database = firebase.database();
  //   const ref = database.ref('scores');

  //   const gotData = (data) => {
  //     console.log(data);
  //   };

  //   const errData = (data) => {
  //     console.log('Error!');
  //   };

  //   const data = {
  //     name: 'EPIC_JAKE',
  //     score: 100
  //   };
  // };

  render() {
    const { leaderboard } = this.props;

    return (
      <div className={"leaderboard " + leaderboard.showLeaderboard}>
        <div className="leaderboard__wrapper">
          <h2 className="leaderboard__title">Total Score Ranking</h2>
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
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    leaderboard: state.leaderboard
  }
};

export default connect(mapStateToProps)(Leaderboard);
