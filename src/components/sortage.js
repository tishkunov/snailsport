import React, { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";
import { sortByAge } from '../actions/fetchData';

class Sortage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonyoung: {
        display:"block"
      },
      buttonolder: {
        display:"none"
      }
    }

    this.sortAgeYounger = this.sortAgeYounger.bind(this);
    this.sortAgeOlder = this.sortAgeOlder.bind(this);
  }

  sortAgeYounger(event) {
    this.setState({
      buttonyoung:{
        display:"none"
      },
      buttonolder:{
        display:"block"
      }
    })
    return this.props.sortByAge(event);
  }

  sortAgeOlder(event) {
      this.setState({
        buttonolder:{
          display:"none"
        },
        buttonyoung:{
          display:"block"
        }
      })
      return this.props.sortByAge(event);
  }

  render() {
    const {buttonolder, buttonyoung} = this.state;
    return (
      <div className="sort-age">
        <button className="sort-young" style={buttonyoung} onClick={this.sortAgeYounger} filter="younger">Sort by Age &#8659;</button>
        <button className="sort-older" style={buttonolder} onClick={this.sortAgeOlder} filter="older">Sort by Age &#8657;</button>
      </div>
    );
  }
}



export default connect(null, { sortByAge })(Sortage);
