import React, { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";
import { sortByName } from '../actions/fetchData';

class Sortname extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buttona: {
        display:"block"
      },
      buttonz: {
        display:"none"
      }
    }

    this.sortNameA = this.sortNameA.bind(this);
    this.sortNameZ = this.sortNameZ.bind(this);
  }

  sortNameA(event) {
    this.setState({
      buttona:{
        display:"none"
      },
      buttonz:{
        display:"block"
      }
    })
    return this.props.sortByName(event);
  }

  sortNameZ(event) {
      this.setState({
        buttona:{
          display:"block"
        },
        buttonz:{
          display:"none"
        }
      })
      return this.props.sortByName(event);
  }

  render() {
    const {buttona, buttonz} = this.state;
    return (
      <div className="sort-name">
        <button className="sort-a" style={buttona} onClick={this.sortNameA} filter="A">Sort by Name &#8657;</button>
        <button className="sort-z" style={buttonz} onClick={this.sortNameZ} filter="Z">Sort by Name &#8659;</button>
      </div>
    );
  }
}



export default connect(null, { sortByName })(Sortname);
