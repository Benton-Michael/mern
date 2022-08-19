import React from "react";
import axios from "axios";

function DeleteButton(props) {
  const { id, handleDelete } = props;
  const deleteHandler = () => {
    axios
      .delete(`http://localhost:5001/api/movies/${id}`)
      .then((res) => {
        console.log(res);
        handleDelete(id); // dynamic (navigate | filter)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <button onClick={deleteHandler}>Delete</button>;
}

export default DeleteButton;
