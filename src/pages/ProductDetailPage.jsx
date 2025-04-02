// src/pages/ProductDetailPage.jsx
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';

function ProductDetailPage() {
  const { productId } = useParams();
  const product = productsData.find(p => p.id === productId);
  
  if (!product) {
    return <div className="container">Product not found</div>;
  }
  
  return (
    <div className="product-detail-page">
      <section className="breadcrumb">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li>{product.category[0] && <Link to={`/products?category=${product.category[0]}`}>{product.category[0]}</Link>}</li>
            <li>{product.name}</li>
          </ul>
        </div>
      </section>
      
      <section className="product-header">
        <div className="container product-header-container">
          <div className="product-title-area">
            <div className="product-category">{product.category.join(' / ')}</div>
            <h1 className="product-title">{product.name}</h1>
            <div className="product-meta">
              <div className="meta-item">
                <span>by {product.provider}</span>
              </div>
              <div className="meta-item">
                <span>Version: {product.version}</span>
              </div>
              <div className="meta-item">
                <span>{product.downloads.toLocaleString()} Downloads</span>
              </div>
              <div className="meta-item">
                <span>Updated: {product.lastUpdated}</span>
              </div>
            </div>
            <div className="product-tags">
              {product.tags.map(tag => (
                <div key={tag} className="product-tag">{tag}</div>
              ))}
            </div>
          </div>
          <div className="action-buttons">
            <a href="#" className="action-button primary-button">Download Latest Version</a>
            <a href="#" className="action-button secondary-button">View Documentation</a>
          </div>
        </div>
      </section>
      
      <section className="product-content container">
        <main className="main-content">
          <div className="content-card">
            <div className="tab-navigation">
              <div className="tab-item active">Overview</div>
              <div className="tab-item">Documentation</div>
              <div className="tab-item">Getting Started</div>
              <div className="tab-item">Examples</div>
            </div>
            <div className="content-card-body">
              <div className="product-description">
                <p>{product.description}</p>
              </div>
              
              <h3>Key Features</h3>
              <ul className="feature-list">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </main>
        
        <aside className="sidebar">
          <div className="cta-card">
            <h3>Get Started Today</h3>
            <p>Join thousands of development teams using {product.name} to enhance their workflow.</p>
            <a href="#" className="cta-button">Try {product.name}</a>
          </div>
          
          <div className="content-card">
            <div className="content-card-header">
              Product Information
            </div>
            <div className="content-card-body">
              <ul className="info-list">
                <li className="info-item">
                  <span className="info-label">License</span>
                  <span>Commercial</span>
                </li>
                <li className="info-item">
                  <span className="info-label">Initial Release</span>
                  <span>June 2023</span>
                </li>
                <li className="info-item">
                  <span className="info-label">Latest Update</span>
                  <span>{product.lastUpdated}</span>
                </li>
                <li className="info-item">
                  <span className="info-label">Category</span>
                  <span>{product.category.join(', ')}</span>
                </li>
                <li className="info-item">
                  <span className="info-label">Rating</span>
                  <span>{product.rating} stars</span>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default ProductDetailPage;