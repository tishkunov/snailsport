import React, { Component } from 'react';
import '../App.css';
import Head from '../components/head'
import Bodyoutput from '../containers/bodyoutput'
import Currentplayer from '../components/currentplayer'
import Filters from '../components/filters'

import { connect } from "react-redux";
import { fetchData } from '../actions/fetchData'

class Racoon extends Component {

  componentWillMount() {
     return this.props.fetchData();
  }

  render() {

    return (
      <div className="racoon">
        <Head  />
        <Filters />
        <Bodyoutput />
        <Currentplayer />
      </div>
    );
  }
}

export default connect(null, {fetchData})(Racoon);
