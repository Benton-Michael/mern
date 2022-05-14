import "./App.css";
import OneProduct from "./components/OneProduct";
import Main from "./views/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* we want to create and displayAll to show on the same path
         abd then for OneProduct we will have another route so we need View components*/}
          <Route path="/" element={<Main />} />
          {/* <Route path="/" element={<DisplayAll />} />  is no longer needed b/c its in Main */}
          {/* using id to make an axios request for one document */}
          <Route path="/product/:id" element={<OneProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
