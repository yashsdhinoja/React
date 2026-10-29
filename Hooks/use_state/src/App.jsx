import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import useToggle from './useState'
import './App.css'

function App() {

  const {isOn, toggle} = useToggle();

  return (
    <div>
        <h1>Custom Hook Demo</h1>
        <h2>Status : {isOn ?'ON':'OFF'}</h2>
        <button onClick={toggle}>Change</button>
    </div>
  );
}
export default App