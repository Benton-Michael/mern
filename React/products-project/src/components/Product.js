import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Col from "react-bootstrap/Col";


const Product = (props) => {
  const { product } = props;
  console.log("PRODUCT:", product);
  const { name, price, category, image } = product;
  const [productPrice, setProductPrice] = useState(price);

  const handleClick = () => {
    console.log("clicked");
    // Math.random /// 0 - 0.9
    const newPrice = Math.floor(Math.random() * 500);
    setProductPrice(productPrice - newPrice);
  };
  return (
    <Col className="mb-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title> {name} </Card.Title>
          <Card.Text>
            <p> price:{productPrice}</p>
            <p>category: {category}</p>
          </Card.Text>
          <Button variant="primary">Change Price</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
