import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateMovie() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [boxArt, setBoxArt] = useState("");
  const [watchLength, setWatchLength] = useState("");
  const [rating, setRating] = useState("");
  const [actors, setActors] = useState([]);
  const [isKidFriendly, setIsKidFriendly] = useState(false);
  const [releaseYear, setReleaseYear] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`)
      .then((res) => {
        console.log("MOVIE", res.data);
        setTitle(res.data.title);
        setGenre(res.data.genre);
        setBoxArt(res.data.boxArt);
        setWatchLength(res.data.watchLength);
        setRating(res.data.rating);
        setActors(res.data.actors);
        setIsKidFriendly(res.data.isKidFriendly);
        setReleaseYear(res.data.releaseYear);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/api/movies/${id}`, {
        title,
        genre,
        boxArt,
        watchLength,
        rating,
        actors,
        isKidFriendly,
        releaseYear,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Genre</label>
      <select onChange={(e) => setGenre(e.target.value)}>
        <option>Select a Genre</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Action">Action</option>
        <option value="Family">Family</option>
        <option value="Animated">Animated</option>
      </select>
      <label>boxArt</label>
      <input
        type="text"
        value={boxArt}
        onChange={(e) => setBoxArt(e.target.value)}
      />
      <label>watchLength</label>
      <input
        type="text"
        value={watchLength}
        onChange={(e) => setWatchLength(e.target.value)}
      />
      <label>Rating</label>
      <select onChange={(e) => setRating(e.target.value)}>
        <option>Select a Rating</option>
        <option value="G">G</option>
        <option value="PG">PG</option>
        <option value="PG-13">PG-13</option>
        <option value="R">R</option>
        <option value="NC-17">NC-17</option>
      </select>
      <label>actors</label>
      <input
        type="text"
        value={actors}
        onChange={(e) => setActors(e.target.value.split(","))}
      />
      <label>releaseYear</label>
      <input
        type="text"
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
      />
      <label>
        isKidFriendly{" "}
        <input
          type="checkbox"
          checked={isKidFriendly}
          onChange={(e) => setIsKidFriendly(e.target.checked)}
        />
      </label>
      <br />
      <input type="submit" value="Update Movie" />
    </form>
  );
}

export default UpdateMovie;
