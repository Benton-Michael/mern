import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import Form from "./components/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const products = [
    {
      id: 1,
      name: "Iphone 13",
      price: 999,
      category: "Smartphone",
      image: "http://via.placeholder.com/200x200",
    },
    {
      id: 2,
      name: "Ipad Pro",
      price: 799,
      category: "Tablet",
      image: "http://via.placeholder.com/200x200",
    },
    {
      id: 3,
      name: "macbook pro",
      price: 2999,
      category: "Laptop",
      image: "http://via.placeholder.com/200x200",
    },
    {
      id: 4,
      name: "apple watch",
      price: 299,
      category: "Watch",
      image: "http://via.placeholder.com/200x200",
    },
  ];
  return (
    <Container>
      <Row>
        <Col className="mb-4">
          <Form />
        </Col>
      </Row>
      <Row>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </Row>
    </Container>
  );
}

export default App;
