import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayer,setEneteredPlayer] = useState(null);


   function handleClick(){
    setEneteredPlayer(playerName.current.value);
    playerName.current.value = '';
      }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayer ? enteredPlayer : 'unknown enity'}</h2>
      <p>
        <input ref ={playerName} type="text" />
        <button  onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
