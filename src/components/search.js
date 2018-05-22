import React, { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";
import { searchQuery } from '../actions/fetchData';

class Search extends Component {

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    return this.props.searchQuery(event);
  }

  render() {

    return (
      <div className="search">
        <input type="text" onChange={this.handleSearch} placeholder="Search" name="search" />
      </div>
    );
  }
}



export default connect(null, { searchQuery })(Search);
