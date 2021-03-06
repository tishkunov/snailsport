import React, { Component } from 'react';
import '../App.css';
import Ceil from '../components/ceil'
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class Bodyoutput extends Component {
  render() {
    if (this.props.players.length !== 0) {
      return (
        <div className="body-output">
          <div className="heads">
            <div>
            Image
            </div>
            <div>
            Name
            </div>
            <div>
            Age
            </div>
            <div>
            Phone
            </div>
          </div>
          {this.props.players.map((item,index) => {
            return <Ceil datakey={index} key={index} age={item.age} name={item.name} phone={item.phone} image={item.image} />
          })}
        </div>
      );
    }
    else {
      return (
        <div className="body-output-no">
          <h3>No Data</h3>
        </div>
      )
    }

  }
}

Bodyoutput.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    age: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
}

const mapStateToProps = state => {
  return {
    players:state.data.players
  }
}

export default connect(mapStateToProps, null)(Bodyoutput);
