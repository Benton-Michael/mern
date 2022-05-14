import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const UpdateProduct = (props) => {
  const { id } = useParams();
  // three pieces of state for title,price,desc.
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  // get info for the document we need
  // id used here is the one destructured by the
  // useParams hook
  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // setting of state
        setTitle(res.data.title);
        // res.data is the whole document
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []); // run once upon initial rendering

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/api/products/${id}`, {
        // shorthand for title : title
        // getter must match the field name!
        // we can continue to use title as above
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-fields">
          <label>Title</label>
          <input
            // the synthetic event we're passing in to fire off the setter and useState
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            type="text"
          />
        </div>
        <br />

        <div className="form-fields">
          <label>Price</label>
          <input
            // the synthetic event we're passing in to fire off the setter and useState
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            name="price"
            type="number"
          />
        </div>

        <br />

        <div className="form-fields">
          <label>Description</label>
          <input
            // the synthetic event we're passing in to fire off the setter and useState
            // setter that we run and then update state
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
            type="text"
          />
        </div>
        <br />
        <input type="submit" className="submit-input" value="Update" />
      </form>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
};

export default UpdateProduct;
