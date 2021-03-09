import { useContext } from 'react';

// Custom components
import { AppContext } from '../../App';

const Metronome = () => {
  const { activeBpm } = useContext(AppContext);

  return (
    <div>{activeBpm}</div>
  );
};

export { Metronome };
