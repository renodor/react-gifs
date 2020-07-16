import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

  handleChange = (event) => {
    this.props.search(event.currentTarget.value);
  }

  render() {
    return (
      <input className='form-search' type="text" onChange={this.handleChange} />
    )
  }
}

export default SearchBar;
