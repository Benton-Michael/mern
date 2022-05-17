import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// get one movie's details and display on the front-end
function Movie() {
  // state for the movie object
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("ID", id);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`)
      .then((res) => {
        console.log("MOVIE", res.data);
        setMovie(res.data);
      })
      .catch((err) => {
        console.log((err) => err);
      });
  }, []); // the empty array

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5001/api/movies/${id}`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Genre:{movie.genre}</p>
      <img src={movie.boxArt} alt="" />
      <p>Duration: {movie.watchLength} </p>
      <p>Rating: {movie.rating} </p>
      <p>Actors:</p>
      <p> {movie.actors && movie.actors.join(",")} </p>
      {movie.isKidFriendly ? <p>Good for Kids</p> : <p>Not for Kids!</p>}
      <p>Relese Year: {movie.releseYear} </p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Movie;
