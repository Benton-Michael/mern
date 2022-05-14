import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAll = (props) => {
  // destructure with the getter and setter keys and values
  const { productList, setProductList } = props;

  // the request to get all products
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/products")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // convert the bytestream from .data to .json
        setProductList(res.data);
      })
      .catch((err) => console.log(err));
  }, []); // useEffect takes in an empty array here

  return (
    <div>
      <header>All Products:</header>
      {/*  map through the productList */}
      {productList.map((product, index) => (
        // only one parent element is allowed for map
        // get the individual products using the _id
        <div key={product._id}>
          <Link to={`/product/${product._id}`}> {product.title} </Link>
        </div>
      ))}
    </div>
  );
};

export default DisplayAll;
