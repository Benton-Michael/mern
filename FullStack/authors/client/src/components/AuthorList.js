import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AuthorList = (props) => {
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/authors")
      .then((response) => {
        console.log(response.data);
        setAuthors(response.data);
      })
      .catch((err) => console.log(err));
  }, [hasBeenSubmitted]);

  const deleteAuthor = (authorId) => {
    axios
      .delete("http://localhost:5001/api/authors/" + authorId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setHasBeenSubmitted(!hasBeenSubmitted);
  };

  return (
    <div className="table">
      <h1>Favorite Authors</h1>
      <Link to="/api/authors">Add an Author</Link>
      <h1>We have quotes by:</h1>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {authors.map((author, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{author.name}</td>
                <td>
                  <Link to={`/api/author/${author._id}`}>Details</Link>
                </td>
                <td>
                  <Link to={`/api/author/edit/${author._id}`}>Edit</Link>
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      deleteAuthor(author._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default AuthorList;
