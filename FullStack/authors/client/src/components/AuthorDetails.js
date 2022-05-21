import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate, Link } from "react-router-dom";

const AuthorDetails = (props) => {
  const { id } = props;
  const [name, setName] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/authors/${id}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  }, [id]);
  return (
    <div>
      <h1>Author name:</h1>
      <p>{name.name}</p>
      <h1>First book was published on:</h1>
      <p>{name.createdAt}</p>
      <hr />
      <h3>
        <Link to="/">Home</Link>
      </h3>
    </div>
  );
};

export default AuthorDetails;
