import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <a href={`/products/${product.id}`} className="btn btn-primary">View Details</a>
      </div>
    </div>
  );
};

export default ProductCard;