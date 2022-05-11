import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

// this function will get all of the movies - using a get request
// the MovieList will come from the api
function MovieList() {
  // we need useState here to create a state to hold the movies
  // an empty array is used to hold the movies
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
        // use 5001 like before and not 8000
      .get("http://localhost:5001/api/movies")
      .then((res) => {
        // Now set movies with the response data
        setMovies(res.data);
      })
      .catch((err) => {
        console.log("Error is in getAll", err);
      });
  }, []);

  return (
    <div>
        {movies.map((movie)=>(
            <div key={movie._id}>
            <h2>{movie.title}</h2>
            <img src = {movie.boxArt} alt="" />
            <br />
            <Link to={`/movie/${movie._id}`}> Details </Link>
            </div>
        ))}
    </div>
  );
}
export default MovieList;
