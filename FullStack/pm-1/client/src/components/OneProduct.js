import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneProduct = (props) => {
  const { id } = useParams();
  const [oneProduct, setOneProduct] = useState({});

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

  return (
    // using our getter to show one product and price, description.
    <div className="oneProduct-component">
      <h2>{oneProduct.title}</h2>
      <p>Price: ${oneProduct.price}</p>
      <p>Description: {oneProduct.description}</p>
    </div>
  );
};

export default OneProduct;
