import React, { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";

class Currentplayer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      profileStyle: {

      }
    }
  }

  render() {
    const {currentPlayer, chosedPlayer} = this.props;
    if (chosedPlayer) {
      return (
        <div className="current-player">
          <img src={`img/${chosedPlayer.image}.svg`} alt={chosedPlayer.image} />
          <h3><strong>Name</strong>: {chosedPlayer.name}</h3>
          <hr />
          <p><strong>Age</strong>: {chosedPlayer.age}</p>
          <hr />
          <p><strong>Phone</strong>: +372 {chosedPlayer.phone}</p>
          <hr />
          <p><strong>Favorite phrase</strong>: {chosedPlayer.phrase}</p>
          <hr />
          <p><strong>Favorite animal</strong>: {chosedPlayer.image}</p>
        </div>
      );
    }
    else {
      if (currentPlayer) {
        return (
          <div className="current-player">
            <img src={`img/${currentPlayer.image}.svg`} alt={currentPlayer.image} />
            <h3><strong>Name</strong>: {currentPlayer.name}</h3>
            <hr />
            <p><strong>Age</strong>: {currentPlayer.age}</p>
            <hr />
            <p><strong>Phone</strong>: +372 {currentPlayer.phone}</p>
            <hr />
            <p><strong>Favorite phrase</strong>: {currentPlayer.phrase}</p>
            <hr />
            <p><strong>Favorite animal</strong>: {currentPlayer.image}</p>
          </div>
        );
      }
      else {
        return (
          <div className="current-player">
            <h3>No data</h3>
          </div>
        )
      }
    }

  }
}

const mapStateToProps = state => {
  return {
    currentPlayer:state.data.players[0],
    chosedPlayer:state.data.chosedPlayer
  }
}

export default connect(mapStateToProps, null)(Currentplayer);
