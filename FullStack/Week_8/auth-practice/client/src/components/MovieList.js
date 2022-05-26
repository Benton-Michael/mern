import { useEffect, useState } from "react";
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

  const handleDelete = (movieID) => {
    axios
      .delete(`http://localhost:5001/api/movies/${movieID}`)
      .then((res) => {
        console.log(res);
        setMovies(movies.filter((movie) => movie._id !== movieID));
      })
      .catch((err) => {
        console.log("Error in Delete", err);
      });
  };

  return (
    <div className="container">
      {movies.map((movie) => (
        <div className="movie" key={movie._id}>
          <div key={movie._id}>
            <h2>{movie.title}</h2>
            <img src={movie.boxArt} alt="" />
            <br />
            <Link to={`/movie/${movie._id}`}> Details </Link>
            <span> | </span>
            <Link to={`/movie/edit/${movie._id}`}>Update</Link>
            <br />
            <button onClick={() => handleDelete(movie._id)}> Delete </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
