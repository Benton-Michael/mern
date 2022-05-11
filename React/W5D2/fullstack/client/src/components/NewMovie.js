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
    axios.post("http://localhost:5001/api/movies", {
      // key and value are the same so no colon needed in syntax
      title,
      genre,
      boxArt,
      watchLength,
      rating,
      actors,
      isKidFriendly,
      releaseYear,
    });
  };
  return <div>NewMovie</div>;
}

export default NewMovie;
