import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";
// app.js
function App() {
  return (
    <div className="App">
      {/* repeatedly displaying on the functional component PersonCard 
      while I provide the necessary data by way of the props */}
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
      {/* from synthetic events section 
      this is just a test to implement the button*/}
      <button onClick={() => alert("Nice!!! The button has been clicked!")}>
        Click here Please!
      </button>
    </div>
  );
}

export default App;
