import { useContext, useEffect } from 'react';
import './Metronome.css'
import click1 from '../../assets/click1.wav';
import click2 from '../../assets/click2.wav';

// Custom components and props
import { AppContext } from '../../App';
const clickSound1 = new Audio(click1);
const clickSound2 = new Audio(click2);



const Metronome = () => {
  let intervalId = null;


  const { activeBpm } = useContext(AppContext);

  const getBpmPauseRate = () => {
    return (60 / activeBpm) * 1000;
  }
  const playClick = () => {
    clickSound1.play();
  }

  useEffect( ()=> {
    // clear the current interval
    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(playClick, getBpmPauseRate());

  }, [activeBpm])

  return (
    <div className="metronome">{activeBpm}</div>
  );
};

export { Metronome };
