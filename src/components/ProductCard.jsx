import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        style={{ height: '250px', objectFit: 'contain', padding: '1rem' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontSize: '1rem', fontWeight: 'bold' }}>{product.title}</Card.Title>
        <Card.Text className="mt-auto">${product.price}</Card.Text>
        <Link to={`/products/${product.id}`} className="mt-2">
          <Button variant="primary" className="w-100">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
