import { useContext } from 'react';
import './Selector.css';

// Custom components
import { AppContext } from '../../App';

const Selector = () => {
  const { bpms, activeBpm, setActiveBpm } = useContext(AppContext);

  const handleClick = (bpm) => {
    // Set clicked bpm to active bpm
    setActiveBpm(bpm);
  }

  return (
    <>
      {activeBpm ?
      <div className="selector">
        {bpms.map((bpm) => ((
          <div
            key={bpm}
            className={`selector__button ${(Number(bpm) === Number(activeBpm)) ? 'selected' : 'unselected'}`}
            onClick={() => { handleClick(bpm) }}>
            {bpm}{' '}bpm
          </div>
        )))}
      </div>
      : null}
    </>

  )
};

export { Selector };
