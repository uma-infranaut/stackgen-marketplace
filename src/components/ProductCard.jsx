// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-header">
        <div className="title-container">
          <h3 className="product-title">
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h3>
          <span className="product-author">by {product.provider}</span>
        </div>
        <span className="product-version">v{product.version}</span>
      </div>
      <div className="product-card-body">
        <p className="product-description">{product.description}</p>
        <div className="product-tags">
          {product.tags.map(tag => (
            <span key={tag} className="product-tag">{tag}</span>
          ))}
        </div>
        <div className="product-meta">
          <div className="product-stats">
            <div className="stat">
              <span>{product.downloads.toLocaleString()}</span> downloads
            </div>
            <div className="stat">
              <span>{product.rating}</span> stars
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;