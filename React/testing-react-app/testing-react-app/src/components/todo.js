import React from "react";

function todo({ todo }) {
  const { id, title, completed } = todo;
  const h1 = <h1>{title}</h1>;
  const text = completed ? <strike>{h1}</strike> : h1;
  return <div data-testid={`todo-${ id }`}> {text} </div>
//   return <div data-testid="todo-1">{ text }</div>;
}

export default todo;
