import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Container, ListGroup, Button, Alert } from 'react-bootstrap';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    alert('✅ Thank you for your purchase!');
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <Container className="mt-5">
        <Alert variant="info" className="text-center">Your cart is empty.</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2>Your Cart</h2>
      <p>Total Items: {totalItems}</p>
      <ListGroup variant="flush">
        {cartItems.map((item) => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{item.title}</strong>
              <p className="mb-1">Price: ${item.price.toFixed(2)}</p>
              <p className="mb-1">Quantity: {item.quantity}</p>
              <p className="mb-0">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="text-end mt-4">
        <h4>Total: ${totalPrice}</h4>
        <Button variant="success" className="mt-2" onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
