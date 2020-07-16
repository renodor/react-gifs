import React, { Component } from 'react';

import Gif from './gif.jsx'

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map((gif) => <Gif key={gif.id} id={gif.id} selectGif={props.selectGif}/>)}
    </div>
  )
}


export default GifList;
