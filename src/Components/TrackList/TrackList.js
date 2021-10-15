import './TrackList.css';

/*Import Components*/
import Track from '../Track/Track';

const TrackList = ({tracks, onAdd, isRemoval, onRemove}) => {

    return (
        <div className="TrackList">
            {
                tracks ?
                    tracks.map((track)=> {
                    return (
                        <Track track={track} key={track.id} onAdd={onAdd} isRemoval={isRemoval} onRemove={onRemove}/>
                    )
                })
                : ''
            }
        </div>
    )
}

export default TrackList
