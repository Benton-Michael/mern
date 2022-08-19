import { useState, useEffect } from 'react';
function Form(props) {
  console.log('OLD MOVIE', props.oldMovie);
  const [movie, setMovie] = useState({
    title: '',
    genre: '',
    boxArt: '',
    watchLength: '',
    rating: '',
    actors: '',
    isKidFriendly: false,
    releaseYear: 0,
  });

  useEffect(() => {
    if (props.oldMovie) {
      setMovie(props.oldMovie);
    }
  }, [props.oldMovie]);

  const [errors, setErrors] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    props.submitHandler(movie, setErrors);
  };
  //
  const handleChange = (e) => {
    if (e.target.name === 'isKidFriendly') {
      setMovie({ ...movie, [e.target.name]: e.target.checked });
    } else if (e.target.name === 'actors') {
      setMovie({ ...movie, [e.target.name]: e.target.value.split(',') });
    } else {
      setMovie({ ...movie, [e.target.name]: e.target.value });
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Title</label>
      <input type="text" value={movie.title} onChange={handleChange} name="title" />
      {errors.title && <p className="text-danger">{errors.title.message}</p>}
      <label>Genre</label>
      <select onChange={handleChange} name="genre" value={movie.genre}>
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
      {errors.genre && <p className="text-danger">{errors.genre.message}</p>}
      <label>boxArt</label>
      <input type="text" value={movie.boxArt} onChange={handleChange} name="boxArt" />
      {errors.boxArt && <p className="text-danger">{errors.boxArt.message}</p>}
      <label>watchLength</label>
      <input type="text" value={movie.watchLength} onChange={handleChange} name="watchLength" />
      {errors.watchLength && <p className="text-danger">{errors.watchLength.message}</p>}
      <label>Rating</label>
      <select onChange={handleChange} name="rating" value={movie.rating}>
        <option>Select a Rating</option>
        <option value="G">G</option>
        <option value="PG">PG</option>
        <option value="PG-13">PG-13</option>
        <option value="R">R</option>
        <option value="NC-17">NC-17</option>
      </select>
      {errors.rating && <p className="text-danger">{errors.rating.message}</p>}
      <label>actors</label>
      <input type="text" value={movie.actors} onChange={handleChange} name="actors" />
      {errors.actors && <p className="text-danger">{errors.actors.message}</p>}
      <label>releaseYear</label>
      <input type="text" value={movie.releaseYear} onChange={handleChange} name="releaseYear" />
      {errors.releaseYear && <p className="text-danger">{errors.releaseYear.message}</p>}
      <label>
        isKidFriendly{' '}
        <input
          type="checkbox"
          checked={movie.isKidFriendly}
          onChange={handleChange}
          name="isKidFriendly"
        />
      </label>
      <br />
      <input type="submit" value={props.buttonText} />
    </form>
  );
}

export default Form;