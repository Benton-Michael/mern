import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = (props) => {
  return <h1 style={{ color: "red" }}>Home Component</h1>;
};

const About = (props) => {
  return <h1 style={{ color: "blue" }}>About Component</h1>;
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Routing example</h1>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />=
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
