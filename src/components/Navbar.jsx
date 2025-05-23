import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // ← new

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen); // ← new

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🎮 GameHub</Link>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>☰</div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>

        {/* Clickable Dropdown */}
        <li className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            Categories ▾
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/category/Keyboard">Keyboard</Link></li>
              <li><Link to="/category/Mouse">Mouse</Link></li>
              <li><Link to="/category/Headset">Headset</Link></li>
              <li><Link to="/add-product">Add Product</Link></li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/cart">
            Cart 🛒 <span className="cart-count">{cartItems.length}</span>
          </Link>
        </li>

        <li>
          <Link to="/edit-product/1">Edit Product</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
