import React from 'react';

import Gif from './gif';

const GifList = ({ gifs, selectGif }) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => <Gif key={id} id={id} selectGif={selectGif} />)}
    </div>
  );
};


export default GifList;
