import React, { useState } from 'react'

import './App.css'
import Animal from './componenets/Animal'
import StartScreen from './componenets/StartScreen'
import LevelSelection from './componenets/LevelSelection'
import { Route, Routes } from 'react-router-dom'
import Success from './componenets/Success'
import Things from './componenets/Things'

function App() {

  const [completedGame, setCompletedGame]= useState('');
  return (
    <div className='container'>
      <Routes>
        <Route 
          path='/'
          element={<StartScreen />}
        />
        <Route 
          path='/level-selection'
          element= {<LevelSelection />}
        />
        <Route 
          path='/animal'
          element= {<Animal onComplete={() => setCompletedGame('animal')}/>}
        />
        <Route 
          path='/thing'
          element= {<Things onComplete={() => setCompletedGame('thing')}/>}
        />
        <Route 
          path='/success'
          element= {<Success game={completedGame}/>}
        />
      </Routes>
</div>
  )
}

export default App
