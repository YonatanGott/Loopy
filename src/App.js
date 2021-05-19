import './App.css';
import NinePads from './components/NinePads';
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Record from './components/Record';

// Material UI component style
const useStyles = makeStyles(() => ({
  container: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [trackList, setTrackList] = useState([])
  const [playing, setPlaying] = useState(false)


  const getTracks = (track) => {
    setTrackList(prevItems => [...prevItems, track])
  }
  const removeTrack = (track) => {
    let index = trackList.indexOf(track);
    if (index > -1) {
      trackList.splice(index, 1);
    }
  }

  const handlePlay = () => {
    setPlaying(true)
    for (let j = 0; j < trackList.length; j++) {
      const audio = new Audio()
      audio.src = trackList[j].src;
      audio.loop = false;
      audio.play();
      if (j === 0) {
        audio.addEventListener('ended', function () {
          setPlaying(false)
        }, true);
      }
    }
  }

  useEffect(() => {
    if (!playing) {
      handlePlay();
    }
    if (trackList.length === 1) {
      handlePlay();
    }
    // eslint-disable-next-line 
  }, [playing, trackList])

  return (
    <div className="App">
      <Container className={classes.container}>
        <Header />
        <NinePads getTracks={getTracks} removeTrack={removeTrack} handlePlay={handlePlay} />
        <Record trackList={trackList} />
      </Container>
    </div>
  );
}

export default App;
