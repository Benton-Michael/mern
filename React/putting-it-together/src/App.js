import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";

const peopleArray = [
  {
    firstName: "Joey",
    lastName: "Tamborine",
    age: 22,
    hair: "None",
  },
  {
    firstName: "Jane",
    lastName: "Montana",
    age: 100,
    hair: "Yellow",
  },
  {
    firstName: "Sean",
    lastName: "Bateman",
    age: 20,
    hair: "Brown",
  },
];

function App() {
  return (
    <div className="App">
      {peopleArray.map((personObject, index) => (
        <PersonCard
          key={index}
          firstName={personObject.firstName}
          lastName={personObject.lastName}
          age={personObject.age}
          hair={personObject.hair}
        />
      ))}
    </div>
  );
}

export default App;
