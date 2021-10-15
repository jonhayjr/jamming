import './App.css';
import {useState} from 'react';

/*Import Components*/
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../Playlist/Playlist';

const App = () => {
  const [searchResults, setSearchResults] = useState([
    {
      name: 'Bye Bye Bye',
      artist: 'Backstreet Boys',
      album: 'No Strings Attached',
      id: 1
    },
    {
      name: 'This I Promise You',
      artist: 'Backstreet Boys',
      album: 'No Strings Attached',
      id: 3
      }
]);

const [playlistName, setPlaylistName] = useState('Top 10 Hits');

const [playlistTracks, setPlaylistTracks] = useState([
  {
    name: 'Its Gonna Be Me',
    artist: 'Backstreet Boys',
    album: 'No Strings Attached',
    id: 2
    }
]);

const addTrack = (track) => {
  const playlistId = playlistTracks.find(t => t.id === track.id);

  if (!playlistId) {
    setPlaylistTracks([...playlistTracks, track]);
  }
}

const removeTrack = (track) => {
  const newPlaylistTracks = playlistTracks.filter(t => t.id !== track.id);
  setPlaylistTracks(newPlaylistTracks);
}

const updatePlaylistName = (name) => {
  setPlaylistName(name);
}

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
          <PlayList onNameChange={updatePlaylistName} playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack}/>
        </div>
      </div>
    </div>
  )
}

export default App
