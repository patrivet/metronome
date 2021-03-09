import { useContext } from 'react';
import './Metronome.css'

// Custom components
import { AppContext } from '../../App';

const Metronome = () => {
  const { activeBpm } = useContext(AppContext);

  return (
      <div className="metronome">{activeBpm}</div>
  );
};

export { Metronome };
