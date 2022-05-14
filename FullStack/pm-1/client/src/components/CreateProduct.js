import React, { useState } from "react";
import axios from "axios";

// define our functional component and pass in props

const CreateProduct = (props) => {
  const { productList, setProductList } = props;

  // state for each of the three fields
  const [title, setTitle] = useState("");
  // doesnt't need to be 0 can be string
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // this is the request body in shorthand  instead of title : title
    // axios.post will return a promise
    axios
      .post("http://localhost:5001/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        //spread out the getter
        // res.data will be our newly created Mongo document (our product)
        setProductList([...productList, res.data]);
        //setting each of these pieces of state to empty strings again
        setTitle("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // this div is the parent element of our return. Best practice to make it a div
    <div>
      <header> Product Manager </header>
      <br />
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
        <input type="submit" className="submit-input" value="Create" />
      </form>
    </div>
  );
};

export default CreateProduct;
