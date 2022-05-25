import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import PetList from "./components/PetList";
import Pet from "./components/Pet";
import NewPet from "./components/NewPet";
import UpdatePet from "./components/UpdatePet";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PetList />} />
        <Route path="/new" element={<NewPet />} />
        <Route path="/pets/:id" element={<Pet />} />
        <Route path="/pets/edit/:id" element={<UpdatePet />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
