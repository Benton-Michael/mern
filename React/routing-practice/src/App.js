import "./App.css";
import Home from "./components/Home";
import ParamsComponent from "./components/ParamsComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* The home route is hardcoded */}
          <Route element={<Home />} path="/home" />

          {/* These are the diff. routes that use parameters passed in via the route/path */}
          <Route element={<ParamsComponent />} path="/:word" />

          <Route element={<ParamsComponent />} path="/:word/:color/:bgColor" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
