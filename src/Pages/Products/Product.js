import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axiosForProduct from "../../InstanceAxios/Products/ProductAxios";
import "./product.css"
export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosForProduct
      .get("/products", {})
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      {" "}
      <Row xs={1} md={3} className="g-4 m-5">
        {products.map((article, index) => (
          <Col key={index}>
            <Card>
              <Card.Img className="ImagesEdit"  src={article.image} />
              <FaHeart
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "90%",
                  color: "red",
                }}
                size={25}
              />

              <Card.Body>
                <Card.Title>{article.title}</Card.Title> 
              </Card.Body> 
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
