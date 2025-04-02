// src/components/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">StackGen Marketplace</Link>
        </div>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search products..." />
        </div>
        <nav className="nav-links">
          <Link to="/products">Explore</Link>
          <Link to="/documentation">Documentation</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;