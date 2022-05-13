import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAll = (props) => {
  const { productList, setProductList } = props;

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/products")
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((err) => console.log(err));
  }, []); // The empty dependecy array

  return (
    <div>
      <header> All Products: </header>
      {productList.map((product, index) => (
        <div key={index}>
          {/* This is where :id in our app.js path gets its value... We can access this info via props */}
          {/* Note: when styling, the DOM read "Link" as an a tag */}
          <Link to={`/product/${product._id}`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default DisplayAll;
