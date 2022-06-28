import React,{useState} from 'react';
import './App.css';
import { Menu } from './modules/Menu';
import { Dynamic } from './components/Dynamic';
import Player from './components/Player';
export default function App() {
  const [isHome,setIsHome] = useState('home');
  const [selected,setSelected] = useState('');
  const [currentClip, setCurrentClip] = useState({
      mp3: '',
      image: undefined,
      title: '',
      author: '',
      autoPlay: false
    })
  return (
    <div className="App">
      <Menu 
      setIsHome={setIsHome}
      setSelected={setSelected}
      isHome={isHome}/>
      <Dynamic 
      isHome={isHome} 
      setIsHome={setIsHome} 
      setCurrentClip={setCurrentClip}
      setSelected={setSelected}
      selected={selected}/>
      <Player 
      currentClip={currentClip}/>
    </div>
  );
}
