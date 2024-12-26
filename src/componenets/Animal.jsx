import React, { useState, useEffect } from "react";
import cow from "../assets/cow.png";
import aligator from "../assets/aligator.png";
import pig from "../assets/pig.png";
import duck from "../assets/duck.png";
import cowShadow from "../assets/cow_shadow.png";
import aligatorShadow from "../assets/aligator_shadow.png";
import pigShadow from "../assets/pig_shadow.png";
import duckShadow from "../assets/duck_shadow.png";
import "../style/animal.css";
import '../App.css'

import good from '../assets/audio/good.mp3';
import bad from '../assets/audio/bad.mp3';
import win from '../assets/audio/win.mp3';
import { useNavigate } from "react-router-dom";

const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  
const Animal = () => {
  const navigate= useNavigate();
  const initialAnimals = [
    { id: 1, name: "Cow", animalImage: cow },
    { id: 2, name: "Aligator", animalImage: aligator },
    { id: 3, name: "Duck", animalImage: duck },
    { id: 4, name: "Pig", animalImage: pig }
  ];
  const initialShadowAnimals=[
    { id: 1, shadowImage: cowShadow },
    { id: 2, shadowImage: aligatorShadow },
    { id: 3, shadowImage: duckShadow },
    { id: 4, shadowImage: pigShadow }
  ];
  const [animals, setAnimals] = useState([]);
  const [shadows, setShadows] = useState([]);

  const [draggedAnimal, setDraggedAnimal]= useState(null);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    setAnimals(shuffleArray(initialAnimals));
    setShadows(shuffleArray(initialShadowAnimals));
  }, []);

  const handleDragStart=(animalId)=>{
        setDraggedAnimal(animalId);
  }
  const handleDrop=(shadowId)=>{
    if(draggedAnimal=== shadowId){
        setMatches((prevMatches)=>{
        const updatedMatches=[...prevMatches,shadowId];

        if (updatedMatches.length === animals.length) {
            navigate('/success')
        }
        else{
        const goodAudio = new Audio(good);
        goodAudio.play();
        }
        return updatedMatches;
    });
        setDraggedAnimal(null);
    }
    else{
        const badAudio = new Audio(bad);
    badAudio.play();
    }
  }
  const isMatched=(id)=>matches.includes(id);

  return (
    <div className="container">
    <div className="animalC">
    <div className="animalContainer">
    <h1 className="animal_heading">Match the animals with shadows</h1>
      <div className="shadow">
        {shadows.map((shadow)=> (
            <div 
            key={`shadow-${shadow.id}`} 
            onDragOver={(e) => e.preventDefault()}
            onDrop={()=> handleDrop(shadow.id)}
            className={`shadowItem ${isMatched(shadow.id) ? 'matched' : ''}`}
            style={{ position: 'relative' }}> 
                <img src={shadow.shadowImage} alt={`shadow ${shadow.id}`} className="animalShadow"></img>
                {isMatched(shadow.id) && (
              <img
                src={animals.find((animal) => animal.id === shadow.id).animalImage}
                alt={`animal ${shadow.id}`}
                className="animalShadow"
              />
            )}
            </div>
        ))}
      </div>
      <div className="animal">
        {
            animals.map((animal)=>(
            
                <img 
                key={`animal ${animal.id}`}
                src={animal.animalImage} alt={animal.name}
                draggable={!isMatched(animal.id)}
                onDragStart={()=> handleDragStart(animal.id)}
                className={`animalItem ${isMatched(animal.id) ? 'hidden' : ''}`}
                ></img>
            
            ))
        }
      </div>
    </div>
    </div>
    </div>
  );
};

export default Animal;
export  {shuffleArray};
