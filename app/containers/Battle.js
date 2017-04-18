var React = require('react');
var Link = require('react-router-dom').Link;
var PlayerInput = require('./PlayerInput');
var PlayerPreview = require('../components/PlayerPreview');


class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      return newState;
    });
  }

  handleReset(id) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return newState;
    })
  }
  
  render() {
    
    var match = this.props.match;
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;
    var playerOneImage = this.state.playerOneImage;
    var playerTwoImage = this.state.playerTwoImage;

    if (!playerOneName) {
      var PlayerOneInput = (
        <PlayerInput
          id='playerOne'
          label='Player One'
          onSubmit={this.handleSubmit}
        />
      );
    } 

    if (playerOneImage !== null) {
      var PlayerOnePreview = (
        <PlayerPreview
          avatar={playerOneImage}
          username={playerOneName}>
            <button
              className='reset'
              onClick={this.handleReset.bind(this, 'playerOne')}>
                Reset
            </button>
        </PlayerPreview>
      );
    } 

    if (!playerTwoName) {
      var PlayerTwoInput = (
        <PlayerInput
          id='playerTwo'
          label='Player Two'
          onSubmit={this.handleSubmit}
        />
      );
    } 

    if (playerTwoImage !== null) {
      var PlayerTwoPreview = (
        <PlayerPreview
          avatar={playerTwoImage}
          username={playerTwoName}>
            <button
              className='reset'
              onClick={this.handleReset.bind(this, 'playerTwo')}>
                Reset
            </button>
        </PlayerPreview>
      );
    } 

    if (playerOneImage && playerTwoImage) {
      var myLink = (
        <Link
          className='button'
          to={{
            pathname: match.url + '/results',
            search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
          }}>
            Battle
        </Link>
      );
    } 

    return (
      <div>
        <div className='row'>
          {PlayerOneInput}
          {PlayerOnePreview}
          {PlayerTwoInput}
          {PlayerTwoPreview}
        </div>
        {myLink}
      </div>
    )
  }
}

module.exports = Battle;