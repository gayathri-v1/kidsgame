import React from 'react'
import bunny from '../assets/bunny_welcome.png'
import '../style/startScreen.css'
import '../App.css'
import { useNavigate } from 'react-router-dom'
const StartScreen = () => {
  const navigate= useNavigate();
  return (
    <div className='container'>
    <div className='start'>
    <div className='startScreen'>
        <h1>Fun times</h1>
        <img src= {bunny} alt='bunny welcome' className='bunnyImage' />
        <button className='startBtn' onClick={()=> navigate('/level-selection')}>START</button>
    </div>
    </div>
    </div>

  )
}

export default StartScreen
