import React from 'react';
import ProductList from "../pages/ProductList";

function Home({ filteredProducts, selectedCategory, setSelectedCategory }) {
  return (
    <div>
      <header
        className="hero"
        style={{ backgroundImage: "url('/images/gaming-banner.jpg')" }}
      >
        <h1>Level Up Your Game</h1>
        <p>Shop elite gaming gear built for champions.</p>
      </header>

      <div className="filter-buttons">
        {['All', 'Keyboard', 'Mouse', 'Headset'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      <section id="products" className="featured">
        <h2>Featured Gear</h2>
        <ProductList products={filteredProducts} />
      </section>
    </div>
  );
}

export default Home;
