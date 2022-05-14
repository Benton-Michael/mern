import "./App.css";
import OneProduct from "./components/OneProduct";
import UpdateProduct from "./components/UpdateProduct";
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
          {/* <Route path="/" element={<DisplayAll />} />  is no longer needed b/c its in Main -- we still need the component though obv!!!*/}
          {/* using id to make an axios request for one document */}
          <Route path="/product/:id" element={<OneProduct />} />
          <Route path="/product/edit/:id" element={<UpdateProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
