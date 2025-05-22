import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';



function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🎮 GameHub</Link>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>

        {/* Category Dropdown */}
        <li className="dropdown">
          <span>Categories ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/category/Keyboard">Keyboard</Link></li>
            <li><Link to="/category/Mouse">Mouse</Link></li>
            <li><Link to="/category/Headset">Headset</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/cart">
            Cart 🛒 <span className="cart-count">{cartItems.length}</span>
          </Link>
        </li>

        <li><Link to="/edit/1">Edit</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
