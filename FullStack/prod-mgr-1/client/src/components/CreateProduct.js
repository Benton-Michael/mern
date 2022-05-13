import React, { useState } from "react";
import axios from "axios";

const CreateProduct = (props) => {
  const { productList, setProductList } = props;

  // A state is created for each of the 3 different input fields
  const [title, setTitle] = useState("");

  // Price is a Number in the Schema. So, "50" would be converted to 50.
  const [price, setPrice] = useState("");

  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    // The default action for a form button (when clicked) is to clear
    // state and refresh the page. The preventDefault function stops this.
    e.preventDefault();

    axios
      .post("http://localhost:5001/api/products", {
        // this is shorthand for title : title
        // Note: This syntax requires an exact match with the getter name. (title), for example.
        title,
        price,
        description,
      })

      .then((res) => {
        console.log(res);
        console.log(res.data);

        setProductList([...productList, res.data]);
        setTitle("");
        setPrice("");
        setDescription("");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <header>Product Manager</header>

      <form onSubmit={submitHandler}>
        <div className="form-fields">
          <label>Title</label>
          <input
            // setting the value to title here in order to clear out the inputs upon submission
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
            onChange={(e) => setPrice(e.target.value)}
            name="price"
            type="number"
          />
        </div>

        <br />

        <div className="form-fields">
          <label>Description</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            type="text"
          />
        </div>

        <br />

        <button className="btn-primary" type="submit" value="Create">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
