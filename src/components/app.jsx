import React, { Component } from 'react';
import giphy from 'giphy-api';

import Gif from './gif.jsx'
import SearchBar from './search_bar.jsx'
import GifList from './gif_list.jsx'

const GIPHY_API_KEY = 'qBENwULSSEhjVVq2xqskDiMnS6NB1u9C'

class App extends Component {
  constructor(props) {
    super(props)


    this.state = {
      gifs: [],
      selectedGif: 'l0K4eeSXuiJTAx1Ti'
    }
  }

  search = (query) => {
    giphy(GIPHY_API_KEY).search({
        q: query,
        rating: 'g',
        limit: 10
    }, (err, res) => {
      this.setState({gifs: res.data})
    });
  }

  selectGif = (id) => {
    this.setState({selectedGif: id})
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )
  }
}

export default App;

