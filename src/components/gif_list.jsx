import React, { Component } from 'react';

import Gif from './gif.jsx'

class GifList extends Component {
  constructor(props) {
    super(props)
  }

  renderList() {
    return (
      this.props.gifs.map((gif) => <Gif key={gif.id} id={gif.id} selectGif={this.props.selectGif}/>)
    )
  }

  render() {
    return (
      <div className="gif-list">{this.renderList()}</div>

    )
  }
}

export default GifList;
