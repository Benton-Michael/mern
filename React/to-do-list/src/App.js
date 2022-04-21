import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Display from "./components/Display";

function App() {

  const [toDoList, setToDoList] = useState([]);

  return (
    <div className="App">
     
     <Form toDoList={toDoList} setToDoList = {setToDoList} />

     <Display toDoList={toDoList} setToDoList={setToDoList} />

    </div>
  );
}

export default App;
