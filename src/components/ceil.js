import React, { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";
import { choosePlayer } from '../actions/fetchData';

class Ceil extends Component {

  chooseplayer(event) {
    return this.props.choosePlayer(event);
  }

  render() {
  const {age, image, name, phone, datakey} = this.props;
    return (
      <div className="ceil" datakey={datakey} onClick={this.chooseplayer.bind(this)} >
        <div className="ceil_image">
          <img src={`img/${image}.svg`} alt="animal"/>
        </div>
        <div className="ceil_name">
          {name}
        </div>
        <div className="ceil_age">
          {age}
        </div>
        <div className="ceil_phone">
          +372 {phone}
        </div>
      </div>
    );
  }
}


export default connect(null, { choosePlayer })(Ceil);
