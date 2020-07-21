import React, { Component } from 'react';

class SearchBar extends Component {

  handleChange = (event) => {
    this.props.search(event.currentTarget.value);
  }

  componentWillMount() {
    console.log('Search bar will mount')
  }

  componentDidMount() {
    console.log('Search bar did mount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
    // don't know why though... because in the handleChange there is props.search...
    // maybe because props.search is a method that is not inside the search_bar render method but in the App component...
  }


  render() {
    console.log('Search bar rendder')
    return (
      <input
        className='form-search form-control'
        type="text"
        onChange={this.handleChange}
      />
    )
  }
}

export default SearchBar;
