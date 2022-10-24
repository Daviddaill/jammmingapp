
import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'CatGroove',
          artist: 'Parov Stellar',
          album: 'Coco',
          id:1
        }, {
          name: 'Crystallize',
          artist: 'Lindsey Stirling',
          album: 'Lindsey Stirling',
          id:2
        }, {
          name: 'Dance Monkey',
          artist: 'tones & I',
          album: 'Dance Monkey',
          id:3
        }
      ],
      playlistName: 'My Playlist',
      playlistTracks: [{
        name: 'name1',
        artist: 'artist1',
        album: 'album1',
        id: 4
      },
      {
        name: 'name2',
        artist: 'artist2',
        album: 'album2',
        id: 5
      },
      {
        name: 'name3',
        artist: 'artist3',
        album: 'album3',
        id: 6
      }]
    }
    this.addTrack= this.addTrack.bind(this);
  }

  addTrack(track){
    const tracks= this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
    
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
                           onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
