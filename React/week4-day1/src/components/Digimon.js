import React from "react";
import { useLocation } from "react-router-dom";

function Digimon() {
  //This has to be called state because state is a keyword
  const { state } = useLocation();
  console.log("STATE", state);
  return (
    <div className="card">
      <img src={state.img} alt={state.name} />
      <h2>{state.name}</h2>
      <p>{state.level}</p>
    </div>
  );
}

export default Digimon;
