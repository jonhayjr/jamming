import './Track.css';

const Track = ({track, onAdd, onRemove, isRemoval}) => {
    const addTrack =(e) => {
        onAdd(track);
    }

    const removeTrack = (e) => {
        onRemove(track);
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            {isRemoval ?
            <button onClick={removeTrack} className="Track-action">-</button>
            : <button onClick={addTrack} className="Track-action">+</button>
            
            }
        </div>
    )
}

export default Track
