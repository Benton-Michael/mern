import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewMovie() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [boxArt, setBoxArt] = useState("");
  const [watchLength, setWatchLength] = useState("");
  const [rating, setRating] = useState("");
  // actors is an empty array
  const [actors, setActors] = useState([]);
  // the default value assumed it is not kid friendly
  const [isKidFriendly, setIsKidFriendly] = useState(false);
  const [releaseYear, setReleaseYear] = useState(0);

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/api/movies", {
        // key and value are the same so no colon needed in syntax
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
        console.log("Error", err);
      });
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select onChange={(e) => setGenre(e.target.value)}>
        <option>Select a Genre</option>
        <option value="Comedy">Comedy</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Drama">Drama</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Horror">Horror</option>
        <option value="Documentary">Documentary</option>
        <option value="Action">Action</option>
        <option value="Animated">Animated</option>
      </select>
      <label>Image Link</label>
      <input
        type="text"
        value={boxArt}
        onChange={(e) => setBoxArt(e.target.value)}
      />
      <label>Watch Length</label>
      <input
        type="text"
        value={watchLength}
        onChange={(e) => setWatchLength(e.target.value)}
      />
      <label>Rating</label>
      <select onChange={(e) => setRating(e.target.value)}>
        <option></option>
        <option value="G">G</option>
        <option value="PG">PG</option>
        <option value="PG-13">PG-13</option>
        <option value="R">R</option>
        <option value="NC-17">NC-17</option>
      </select>
      {/* We can't take in user input as an array */}
      {/* so we'll accept the user input as a string with a commma between the actors */}
      {/* We're using split() on the comma - this will split the names into an array */}
      <lable>Actors</lable>
      <input
        type="text"
        value={actors}
        onChange={(e) => setActors(e.target.value.split(","))}
      />
      <label>Release Year</label>
      <input
        type="text"
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
      />
      <label>isKidFriendly</label>
      <input
        type="checkbox"
        checked={isKidFriendly}
        onChange={(e) => setIsKidFriendly(e.target.checked)}
      />

      <input type="submit" value="Add Movie" />
    </form>
  );
}

export default NewMovie;
