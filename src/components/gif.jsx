import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const id = 'l0K4eeSXuiJTAx1Ti'
    return (
      <img className='gif' src={`https://media.giphy.com/media/${id}/giphy.gif`} alt=""/>
    )
  }
}

export default Gif;
