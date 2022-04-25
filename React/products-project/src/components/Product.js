import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Col from "react-bootstrap/Col";

const Product = (props) => {
  const { product, products, setProducts } = props;
  console.log("PRODUCT:", product);
  const { name, price, category, image } = product;
  // all of this logic will eventually move to the app.js - lifting it (lifting state) to the parent - which is App -in this  example
  const handleClick = () => {
    console.log("clicked");
    // Math.random /// 0 - 0.9
    const randomNumber = Math.floor(Math.random() * 500);
    const newPrice = price - randomNumber;
    // loop through products to update the one with id equal to the one we want to change
    const updatedProducts = products.map((p) => {
      if (product.id === p.id) {
        p.price = newPrice;
      }
      return p;
    });
    setProducts(updatedProducts);
  };
  const handleDelete = () => {
    const filteredProducts = products.filter((p) => p.id !== product.id);
    setProducts(filteredProducts);
  };
  return (
    <Col className="mb-4">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title> {name} </Card.Title>
          <Card.Text>
            <p> price:{price}</p>
            <p>category: {category}</p>
          </Card.Text>

          <Button variant="primary" onClick={handleClick}>
            Change Price
          </Button>
          <Button className="ms-4" variant="danger" onClick={handleDelete}>
            Delete Product
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
