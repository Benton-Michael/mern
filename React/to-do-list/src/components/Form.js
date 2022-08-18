import React, { useState } from "react";

const Form = (props) => {
  // using state for the to-do list items
  const [toDoText, setToDoText] = useState("");

  // deconstruct the object with props
  const { toDoList, setToDoList } = props;

  // handler function for the form submission
  const submitHandler = (e) => {
    e.preventDefault();
    setToDoList([
      ...toDoList,
      {
        content: toDoText,
        markedDelete: false,
        itemId: Math.floor(Math.random() * 1000000).toString(),
      },
    ]);
    setToDoText("");
  };

  return (
    <div data-test-id="todo-1">
      <form onSubmit={submitHandler}>
        <input
          value={toDoText}
          onChange={(e) => setToDoText(e.target.value)}
          type="text"
        />
      </form>
    </div>
  );
};

export default Form;
