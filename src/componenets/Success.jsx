import React from 'react'
import { useEffect } from 'react'
import PropTypes from 'prop-types';
import '../style/success.css'
import star from '../assets/star.png'
import win from '../assets/audio/success.mp3'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Success = ({game}) => {
  const navigate = useNavigate();

  // const handleRestart = () => {
  //   if(game){
  //   navigate(`/${game}`);}
  //   else {
  //     console.warn('Game prop is missing.');
  //   }
  // };

  const handleMenu = () => {
    navigate('/level-selection');
  };
  useEffect(() => {
    const winAudio = new Audio(win);
    winAudio.play().catch((error)=>{
      console.log('Audio playback failed',error);
    });
  }, []);

  return (
    <div className='container'>
    <div className='successMessage'>
    <div className='success'>
      <h1>Congratulations you did it!</h1>

    <div >
      <img src={star} alt='star' className='stars'></img>
      
      </div>
      <div className='navBtn'>
      {/* <button onClick={handleRestart}>Restart</button> */}
      <button onClick={handleMenu}>Menu</button>
      </div>
    </div>
    </div>
    </div>
  )
}
Success.propTypes = {
  game: PropTypes.string.isRequired, 
};
export default Success
