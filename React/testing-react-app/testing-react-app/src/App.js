import "./App.css";
import Todo from "./components/todo";

function App() {
  // define what a toDo looks like
  const toDos = [
    { id: 1, title: "Study JS", completed: false },
    { id: 2, title: "Study testing with Jest", completed: true },
  ];

  // Now we want to use the toDo items above (toDos) as parameters in the Todo component

  return (
    <div className="App">
      {toDos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default App;
