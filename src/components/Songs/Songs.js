import { useContext, useState, useEffect } from 'react';
import './Songs.css';

// Custom components
import { AppContext } from '../../App';
import { allSongs } from '../../assets/bpm';

// Variables for Songs API handling
const BASE_URL = process.env.REACT_APP_SONGS_API_URL;
const API_KEY = process.env.REACT_APP_SONGS_API_KEY;
const TEMPLATE_URL = BASE_URL.replace('<API_KEY>', API_KEY);

const Songs = () => {
  const { activeBpm } = useContext(AppContext);
  const bpmSongs = () => {
    // filter songs matching activeBpm only.
    allSongs.filter( ([name, artist, bpm]) => {
      return Number(bpm) == activeBpm;
    })
    return allSongs.filter( ([name, artist, bpm]) => Number(bpm) == activeBpm)
  }

  // State and functions for Songs API
  const [songs, setSongs] = useState();
  const [ready, setReady] = useState(false);

  const fetchSongs = (urlWithBpm) => {
    setReady(false);

    fetch(urlWithBpm, {Accept: 'application/json'})
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
    .then(res => {
      let songsArr = res.tempo;
      setSongs(songsArr)
    })
    .finally(() => {
      setReady(true);
    })
    .catch(err => {
      console.error(`Error fetching GET to =${urlWithBpm} error =`);
      console.table(err);
    });
  };

  useEffect( () => {
    let urlWithBpm = TEMPLATE_URL.replace('<BPM>', activeBpm)
    fetchSongs(urlWithBpm);
  },[activeBpm])

  const songsFromFile = () => { return (
    <div className="songs__name-artist">{bpmSongs().map( ([name, artist, bpm]) => {
      return (<p key={`${name}_${artist}_${bpm}`}>{name}{' '}({artist})</p>)
    })}
    </div>
  )};

  const songsFromAPI = () => { return (
    <div className="songs__name-artist">
      {songs.map( (song)=> {
        let title = song.song_title;
        let artist = song.artist.name;
        return <p key={`${song.song_id}`}>{title}{' '}({artist})</p>
      })}
    </div>
  )};

  return (
    <div className="songs">
      <p>Songs that use this BPM:</p>
        {ready
        ? (songs) ? songsFromAPI() : songsFromFile()
        : null
        }
      </div>
  );
};

export { Songs };
