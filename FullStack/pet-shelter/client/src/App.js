import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import PetForm from "./components/PetForm";
import EditPet from "./components/EditPet";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Pet Shelter!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/new" element={<PetForm />} />
          <Route path="/edit/:id" element={<EditPet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
