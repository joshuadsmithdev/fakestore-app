// components/ProductCard.jsx
import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={product.image} style={{ height: '300px', objectFit: 'contain' }} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Link to={`/products/${product.id}`}>
            <Button variant="primary">View Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
