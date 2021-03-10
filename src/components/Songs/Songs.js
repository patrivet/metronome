import { useContext } from 'react';
import './Songs.css';

// Custom components
import { AppContext } from '../../App';
import { allSongs } from '../../assets/bpm';

const Songs = () => {
  const { activeBpm } = useContext(AppContext);
  const bpmSongs = () => {
    // filter songs matching activeBpm only.
    allSongs.filter( ([name, artist, bpm]) => {
      return Number(bpm) == activeBpm;
    })
    return allSongs.filter( ([name, artist, bpm]) => Number(bpm) == activeBpm)
  }

  return (
    <div className="songs">
      <p>Song that use this BPM: ({activeBpm})</p>
      <div className="songs__song">{bpmSongs().map( ([name, artist, bpm]) => {
        return (<p key={`${name}_${artist}_${bpm}`}>{name}{' '}({artist})</p>)
      })}
      </div>
    </div>
  );
};

export { Songs };
