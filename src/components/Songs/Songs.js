import { useContext } from 'react';

// Custom components
import { AppContext } from '../../App';
import { allSongs } from '../../assets/bpm';

const Songs = () => {
  const { activeBpm } = useContext(AppContext);
  const bpmSongs = () => {
    // filter songs matching activeBpm only.
    return allSongs.filter( (song) => song[2] == activeBpm)
  }

  return (
    <div>
      <p>Song that use this BPM: ({activeBpm})</p>
      <div>{bpmSongs().map( ([name, artist, bpm]) => {
        return (<p key={`${name}_${artist}_${bpm}`}>{name}{' '}({artist})</p>)
      })}
      </div>
    </div>
  );
};

export { Songs };
