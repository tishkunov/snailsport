import React, { Component } from 'react';
import '../App.css';
import Search from '../components/search'
import Sortage from '../components/sortage'
import Sortname from '../components/sortname'

class Filters extends Component {

  render() {

    return (
      <div className="filters">
        <Search />
        <Sortage />
        <Sortname />
      </div>
    );
  }
}

export default Filters;
