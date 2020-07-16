import React, { Component } from 'react';

import Gif from './gif.jsx'
import SearchBar from './search_bar.jsx'
import GifList from './gif_list.jsx'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif />
          </div>
        </div>
        <div className="right-scene">
          <GifList />
        </div>
      </div>
    )
  }
}

export default App;

