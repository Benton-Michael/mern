import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import Math from "./components/Math";
import Digimon from "./components/Digimon";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/math/:a/:b" element={<Math />} />
          <Route path="/digimons/:name" element={<Digimon />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

{
  /* Route and Routes should live in the app.js file as best practice */
}
