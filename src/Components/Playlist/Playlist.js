import './Playlist.css';

/*Import Components*/
import TrackList from '../TrackList/TrackList';

const Playlist = ({playlistTracks, onRemove, onNameChange, playlistName}) => {
 
    const handleNameChange = (e) => {
        onNameChange(e.target.value);
    }

    return (
        <div className="Playlist">
            <input value={playlistName} onChange={handleNameChange}/>
            <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist
