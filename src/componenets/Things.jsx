import React, { useEffect, useState } from 'react'
import shoe from '../assets/shoe.png'
import socks from '../assets/sock.png'
import shirt from '../assets/shirt.png'
import tie from '../assets/tie.png'
import plate from '../assets/plate.png'
import cutlery from '../assets/cutlery.png'
import note from '../assets/notebook.png'
import pen from '../assets/pen.png'
import { shuffleArray } from './Animal'
import good from '../assets/audio/good.mp3';
import bad from '../assets/audio/bad.mp3';
import win from '../assets/audio/win.mp3';
import '../style/things.css'
import '../App.css'

const Things = () => {

    const itemList1=[
        {id:1, name:shoe},
        {id:2, name:shirt},
        {id:3, name:plate},
        {id:4, name:note}
        
    ];
    const itemList2=[
        {id:1, name:socks},
        {id:2, name:tie},
        {id:3, name:cutlery},
        {id:4, name:pen}
        
    ];

    const [things, setThings]= useState([]);
    const [pairs, setPairs]= useState([]);
    const [draggedPair, setDraggedPair]= useState(null);
      const [matches, setMatches] = useState([]);
      const [droppedImages, setDroppedImages]= useState({});
      useEffect(()=>{
            setThings(shuffleArray(itemList1));
            setPairs(shuffleArray(itemList2));
           

      },[]);

      const handleDragStart=(pairId)=>{
        setDraggedPair(pairId);
  }
  const handleDrop=(thingID)=>{
        if(draggedPair=== thingID){
            setMatches((prevMatches)=>{
                const updatedMatch=[...prevMatches,thingID];
                if(updatedMatch.length===things.length){
                  navigate('/success')

                }
                else{
                    const goodAudio= new Audio(good);
                    goodAudio.play();
                }
                return updatedMatches;
            });
            const droppedItem= pairs.find((pair)=>pair.id===draggedPair);
            setDroppedImages((prev)=>({
                ...prev,[thingID]:droppedItem
            }))
            setDraggedPair(null);
           
        }
        else{
            const badAudio = new Audio(bad);
            badAudio.play();
        }
  }
  const isMatched=(id)=>matches.includes(id);
  return (
    <div className='container'>
    <div className='thingPair'>
    <div className='game2Container'>
    <h1 className='pairsHeading'>Match the following pairs with things</h1>
      <div className='things'>
        {
            things.map((item)=>(
                <div key={`thing- ${item.id}`}
                onDragOver={(e)=> e.preventDefault()}
                onDrop={()=>handleDrop(item.id)}
                className={`thingItem ${isMatched(item.id)?'matched' :'' }`}
                >
                    <img src={item.name} alt={item.name} className='thingsImage'></img>
                    <div className='dropDiv'>
                    {droppedImages[item.id] && (
                <img
                  src={droppedImages[item.id].name}
                  alt={`dropped ${droppedImages[item.id].name}`}
                  className="droppedImage"
                />
              )}
                    </div>
                </div>
            ))
        }
      </div>
      <div className='pairs'>
            {pairs.map((item)=>(
                
                    <img 
                    key={`pair- ${item.id}`}
                    src={item.name} alt={item.name}
                    draggable={!isMatched(item.id)}
                    onDragStart={()=>handleDragStart(item.id)}
                    className={`pair ${isMatched(item.id)?'hidden' : ''}`}
                    />
                
            ))}
      </div>
    </div>
    </div></div>
  )
}

export default Things
