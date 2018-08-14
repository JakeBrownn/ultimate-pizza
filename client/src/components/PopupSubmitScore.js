import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';
import PlayerSummary from './PlayerSummary';
import { toggleSubmitPopup, submitScore } from '../actions';
import IconTrophy from '../assets/images/icon-trophy.png';

class PopupSubmitScore extends Component {

  // When 'Cancel' is clicked
  onCancelClick(e) {
    e.preventDefault();
    
    this.props.toggleSubmitPopup();
  }

  // When 'Submit Score' is clicked
  onSubmitClick(e) {
    e.preventDefault();
    
    const { form, counter } = this.props;
    
    // Create player object with data from props
    const player = {
      username: form.playerUsername,
      score: counter.total
    };

    this.props.submitScore(player);
  }

  renderContent() {
    const { loading, submitSuccess } = this.props.form;
    const Trophy = () => <img className='submit-score__trophy' src={IconTrophy} alt='Trophy' />;

    switch(true) {

      // Show loading animation whilst Score is submitting
      case loading:
        return <LoadingSpinner />;

      // When Score has been successfully submitted
      case submitSuccess:
        return (
          <React.Fragment>
            <p className='title title--popup'>Thanks for playing Ultimate Pizza!</p>
            <p className='submit-score__text submit-score__text--message'>
              <Trophy /> 
              You placed on our Leaderboards!
              <Trophy />
            </p>
            <PlayerSummary />
            <div className='submit-score__buttons-row'>
              <a className='submit-score__button submit-score__button--game-ended' href='' onClick={() => window.location.href} >Back To Menu</a>
              <a 
                className='submit-score__button submit-score__button--game-ended' 
                href='https://github.com/JakeBrownn/ultimate-pizza' 
                target='_blank'
                rel="noopener noreferrer"
              >
                Github Repo
              </a>
            </div>
          </React.Fragment>
        );
            
      default:
        return (
          <React.Fragment>
            <h2 className='title title--popup'>End Game Session?</h2>
            <p className='submit-score__text'>Submitting your score will end your current session and rank you on our leaderboards.</p>
            <p className='submit-score__text'>You will not keep your total slices once submitted.</p>
            <p className='submit-score__text'>Do you want to submit your score?</p>
            <form className='submit-score__buttons-wrapper'>
              <input className='submit-score__button no' value='Cancel' type='submit' onClick={(e) => this.onCancelClick(e)} />
              <input className='submit-score__button yes' value='Submit Score' type='submit' onClick={(e) => this.onSubmitClick(e)} />
            </form>
          </React.Fragment>
        );
    }
  }

  render() {     
    return (
      <div className='submit-score'>
        <div className='submit-score__wrapper'>
          {this.renderContent()}
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ form, counter }) => {
  return { form, counter };
};

export default connect(mapStateToProps, {
  toggleSubmitPopup,
  submitScore
})(PopupSubmitScore);
