import { useContext } from 'react';

// Custom components
import { AppContext } from '../../App';

const Songs = () => {
  const { activeBpm } = useContext(AppContext);
  return (
    <div>
      <p>Song that use this BPM: ({activeBpm})</p>
    </div>
  );
};

export { Songs };
