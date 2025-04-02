// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

function HomePage() {
  // Get featured products (just the top 3 by downloads for this example)
  const featuredProducts = [...productsData]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>Digital Products & Services for Developers</h1>
          <p>Discover, deploy, and manage StackGen's powerful software components and services to enhance your development workflow.</p>
          <Link to="/products" className="cta-button">Explore Products</Link>
        </div>
      </section>
      
      <section className="categories container">
        <h2>Browse by Category</h2>
        <div className="category-cards">
          <div className="category-card">
            <div className="category-icon">🔧</div>
            <h3>DevOps Tools</h3>
          </div>
          <div className="category-card">
            <div className="category-icon">🔐</div>
            <h3>Security Solutions</h3>
          </div>
          <div className="category-card">
            <div className="category-icon">📊</div>
            <h3>Analytics Services</h3>
          </div>
          <div className="category-card">
            <div className="category-icon">☁️</div>
            <h3>Cloud Infrastructure</h3>
          </div>
        </div>
      </section>
      
      <section className="featured">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="product-cards">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-card-header">
                  <h3 className="product-title">
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </h3>
                  <span className="product-author">by {product.provider}</span>
                </div>
                <div className="product-card-body">
                  <p className="product-description">{product.description}</p>
                  <div className="product-meta">
                    <span>v{product.version}</span>
                    <div className="product-downloads">
                      <span>{product.downloads.toLocaleString()}</span> downloads
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all">
            <Link to="/products">View All Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;