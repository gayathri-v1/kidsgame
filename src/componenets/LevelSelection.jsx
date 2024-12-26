import React from 'react'
import level from '../assets/level.png'
import lock from '../assets/level_lock.png'
import '../style/levelSelection.css'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const LevelSelection = () => {
  const navigate= useNavigate();
  return (
    <div className='container'>
    <div className='level'>
    <div className='levelContainer'>
      <img src={level} alt='animals' onClick={()=> navigate('/animal')}></img>
      <img src={level} alt='thingpair' onClick={()=> navigate('/thing')}></img>
      <img src={lock} alt='lock'></img>
      <img src={lock} alt='lock'></img>
      <img src={lock} alt='lock'></img>
      <img src={lock} alt='lock'></img>
      <img src={lock} alt='lock'></img>
      <img src={lock} alt='lock'></img>
      <img src={lock} alt='lock'></img>
     
    </div>
    </div>
    </div>
  )
}

export default LevelSelection
