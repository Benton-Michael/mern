import React, { useState } from "react";

// see List.js from W4D1
const Display = (props) => {
  const { toDoList, setToDoList } = props;

  const handleCompleted = (todo) => {
    todo.markedDelete = !todo.markedDelete;
    setToDoList([...toDoList]);
  };

  // is the todo item in state and marked to be deleted
  // booleans
  const marked = (markedDelete) => {
    if (markedDelete === true) {
      return "complete";
    } else {
      return "incomplete";
    }
  };

  const deleteButton = (idFromBelow) => {
    setToDoList(
      toDoList.filter((todo, index) => {
        return todo.id !== idFromBelow;
      })
    );
  };

  return (
    <div>
      {toDoList.map((todo, index) => (
        <div className={marked(todo.markedDelete)} key={todo.id}>
          {" "}
          <p>{todo.content}</p>
          <input type="checkbox" onChange={() => handleCompleted(todo)} />
          <button onClick={() => deleteButton(todo.id)}> Delete </button> {""}
        </div>
      ))}
    </div>
  );
};

export default Display;
