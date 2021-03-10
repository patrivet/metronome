import { useContext, useEffect } from 'react';
import './Metronome.css'
import click1 from '../../assets/click1.wav';
import click2 from '../../assets/click2.wav';

// Custom components and props
import { AppContext } from '../../App';
const clickSound1 = new Audio(click1);
const clickSound2 = new Audio(click2);
let intervalId = null;

const Metronome = () => {
  const { activeBpm } = useContext(AppContext);

  const playClick = () => {
    clickSound1.play();
  }

  useEffect( ()=> {
    // clear the current interval
    if (intervalId) clearInterval(intervalId);
    let intervalSeconds = (60 / activeBpm);
    intervalId = setInterval(playClick, intervalSeconds * 1000);
    // set interval seconds to css variable.
    const metronomeElement = document.querySelector('.metronome');
    metronomeElement.style.setProperty('--pulse-rate', `${intervalSeconds}s`)
  }, [activeBpm])

  return (
    <div className="metronome">{activeBpm}</div>
  );
};

export { Metronome };
