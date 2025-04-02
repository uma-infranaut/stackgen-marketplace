// src/pages/ProductsPage.jsx
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

function ProductsPage() {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [selectedSort, setSelectedSort] = useState('popular');
  
  // Filter products by category
  let filteredProducts = [...productsData];
  if (categoryFilter.length > 0) {
    filteredProducts = filteredProducts.filter(product => 
      product.category.some(cat => categoryFilter.includes(cat))
    );
  }
  
  // Sort products
  if (selectedSort === 'popular') {
    filteredProducts.sort((a, b) => b.downloads - a.downloads);
  } else if (selectedSort === 'newest') {
    filteredProducts.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
  } else if (selectedSort === 'name-asc') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  // Get unique categories
  const allCategories = [...new Set(productsData.flatMap(product => product.category))];
  
  // Handle category filter change
  const handleCategoryChange = (category) => {
    setCategoryFilter(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  return (
    <div className="products-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Browse Products</h1>
          <p className="page-description">Discover StackGen's collection of software services and digital products to enhance your development workflow.</p>
        </div>
      </section>
      
      <section className="container browse-container">
        <aside className="filters">
          <div className="filter-section">
            <h3>Categories</h3>
            <div className="filter-options">
              {allCategories.map(category => (
                <div key={category} className="filter-option">
                  <input 
                    type="checkbox" 
                    id={`cat-${category.replace(/\s+/g, '-').toLowerCase()}`}
                    checked={categoryFilter.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <label htmlFor={`cat-${category.replace(/\s+/g, '-').toLowerCase()}`}>
                    {category}
                  </label>
                  <span className="filter-count">
                    {productsData.filter(p => p.category.includes(category)).length}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>
        
        <main className="products-grid">
          <div className="toolbar">
            <div className="sort-options">
              <span className="sort-label">Sort by:</span>
              <select 
                className="sort-select"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="name-asc">Name (A-Z)</option>
              </select>
              <span className="results-count">
                Showing {filteredProducts.length} of {productsData.length} results
              </span>
            </div>
          </div>
          
          <div className="product-cards">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}

export default ProductsPage;