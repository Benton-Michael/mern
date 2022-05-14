import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const OneProduct = (props) => {
  const { id } = useParams();
  const [oneProduct, setOneProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // confirm this path as same as getOneProduct
    axios
      .get(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // use our setter to set state to the res.data
        setOneProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const deleteFilter = () => {
    axios
      .delete(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        // console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    // using our getter to show one product and price, description.
    <div className="oneProduct-component">
      <h2>{oneProduct.title}</h2>
      <p>Price: ${oneProduct.price}</p>
      <p>Description: {oneProduct.description}</p>
      <button onClick={deleteFilter}>Delete</button>
      {/* useEffect will updat in DisplayAll when we go back/re-render */}
      <Link to={"/"}>Go Home</Link>
    </div>
  );
};

export default OneProduct;
