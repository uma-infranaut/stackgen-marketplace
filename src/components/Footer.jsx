// src/components/Footer.jsx
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">StackGen</div>
            <p>Building better developer tools and services.</p>
          </div>
          
          <div className="footer-section">
            <h3>Products</h3>
            <ul>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/products?filter=new">New Releases</Link></li>
              <li><Link to="/products?filter=featured">Featured</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/documentation">Documentation</Link></li>
              <li><Link to="/tutorials">Tutorials</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          &copy; {new Date().getFullYear()} StackGen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;