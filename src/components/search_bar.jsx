import React, { Component } from 'react';

class SearchBar extends Component {
  componentWillMount() {
    console.log('Search bar will mount');
  }

  componentDidMount() {
    console.log('Search bar did mount');
  }

  shouldComponentUpdate() {
    return false;
    // don't know why though... because in the handleChange there is props.search...
    // maybe because props.search is not a method inside the search_bar render()
    // but in the App component
  }

  handleChange = (event) => {
    this.props.search(event.currentTarget.value);
  }

  render() {
    console.log('Search bar rendder');
    return (
      <input
        className="form-search form-control"
        type="text"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
