import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditProduct({ products, setProducts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const productToEdit = products.find(p => p.id === parseInt(id));

  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    category: ''
  });

  useEffect(() => {
    if (productToEdit) {
      setForm(productToEdit);
    }
  }, [productToEdit]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const updated = products.map(p =>
      p.id === parseInt(id) ? { ...form, id: p.id } : p
    );
    setProducts(updated);
    navigate('/');
  };

  return (
    <div className="edit-product">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" />
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProduct;
