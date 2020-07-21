import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.id !== this.props.id;
  }

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    if (!this.props.id) {
      return null;
    }

    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img className="gif" src={src} alt="" onClick={this.handleClick} />
    );
  }
}

export default Gif;
