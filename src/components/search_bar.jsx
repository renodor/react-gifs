import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input className='form-search' type="text"/>
    )
  }
}

export default SearchBar;
