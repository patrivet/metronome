import { useEffect } from 'react';
import './Metronome.css'
import click1 from '../../assets/click1.wav';

// Custom components and props
import { useAppContext } from '../../App';
const clickSound1 = new Audio(click1);
let intervalId = null;

const Metronome = () => {
  const { activeBpm } = useAppContext();

  const playClick = () => {
    clickSound1.play().catch((error) => {
      console.error(error);
    });
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
