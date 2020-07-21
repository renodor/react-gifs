import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      term: event.currentTarget.value
    })
    this.props.search(event.currentTarget.value);
  }

  render() {
    return (
      <input
        className='form-search form-control'
        value={this.state.term}
        type="text"
        onChange={this.handleChange}
      />
    )
  }
}

export default SearchBar;
