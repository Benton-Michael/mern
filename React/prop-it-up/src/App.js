import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Robertson"}
        firstName={"Jimmy"}
        age={"103"}
        hair={"dark white"}
      />
      <PersonCard
        lastName={"Robot Cheeze"}
        firstName={"Chucky E."}
        age={"313"}
        hair={"alien green"}
      />
      <PersonCard
        lastName={"Servo"}
        firstName={"Tommy"}
        age={"29"}
        hair={"hair-free"}
      />
      <PersonCard
        lastName={"Franky"}
        firstName={"Tunichi"}
        age={"55"}
        hair={"pink"}
      />
    </div>
  );
}

export default App;
