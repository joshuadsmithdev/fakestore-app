import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    axios.post('https://fakestoreapi.com/products', {
      title: formData.title,
      price: parseFloat(formData.price),
      description: formData.description,
      image: formData.image || 'https://via.placeholder.com/200',
      category: formData.category
    })
    .then(() => {
      setSuccess(true);
      setFormData({ title: '', price: '', description: '', category: '', image: '' });
    })
    .catch(() => {
      setError('Failed to add product.');
    });
  };

  return (
    <main className="layout">
      <h2>Add New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" name="category" value={formData.category} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" name="image" value={formData.image} onChange={handleChange} />
        </Form.Group>

        <Button type="submit" variant="primary">Add Product</Button>
      </Form>

      {success && <Alert variant="success" className="mt-3">Product added successfully (mocked).</Alert>}
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
    </main>
  );
};

export default AddProduct;
