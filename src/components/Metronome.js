import React, {useState} from 'react';
import sound1 from '../assets/sounds/sound1.wav';
import sound2 from '../assets/sounds/sound1.wav';
import {set} from 'react-native-reanimated';

const Metronome = () => {
  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [bpm, setBpm] = useState(100);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  let click1 = new Audio(sound1);
  let click2 = new Audio(sound2);

  const handleBpmChange = (e) => {
    const bpm = e.target.value;
    if (playing) {
      clearInterval(this.timer);
      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);
      setCount(0);
      setBpm();
    } else {
      setBpm();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bpm);
  };

  const startStop = () => {
    if (playing) {
      clearInterval(this.timer);
      setPlaying(false);
    } else {
      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);
      setCount(0);
      setPlaying(true);
    }
    this.playClick;
  };

  const playClick = () => {
    if (count % beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }
    setCount(count + 1) % setBeatsPerMeasure;
  };
  return(
      
  );
};

export default Metronome;
