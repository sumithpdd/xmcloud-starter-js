import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="dlink-header">
      {/* Main Navigation */}
      <nav className="dlink-main-nav">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* Logo */}
            <div className="dlink-logo">
              <a href="/">
                <img src="/dlink-logo.svg" alt="D-Link" className="logo-img" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="dlink-nav-menu d-none d-lg-flex">
              <div className="nav-item dropdown">
                <a href="/home" className="nav-link dropdown-toggle">
                  For Home
                </a>
                <div className="dropdown-menu">
                  <a href="/home/wifi" className="dropdown-item">Wi-Fi</a>
                  <a href="/home/4g-5g" className="dropdown-item">4G/5G</a>
                  <a href="/home/cameras" className="dropdown-item">Cameras</a>
                  <a href="/home/smart-home" className="dropdown-item">Smart Home</a>
                  <a href="/home/switches" className="dropdown-item">Switches</a>
                  <a href="/home/adapters" className="dropdown-item">Adapters</a>
                  <a href="/home/mydlink" className="dropdown-item">mydlink</a>
                </div>
              </div>

              <div className="nav-item dropdown">
                <a href="/business" className="nav-link dropdown-toggle">
                  For Business
                </a>
                <div className="dropdown-menu">
                  <a href="/business/switches" className="dropdown-item">Switches</a>
                  <a href="/business/wireless" className="dropdown-item">Wireless</a>
                  <a href="/business/routers" className="dropdown-item">Business Routers</a>
                  <a href="/business/nuclias" className="dropdown-item">Nuclias</a>
                  <a href="/business/surveillance" className="dropdown-item">IP Surveillance</a>
                  <a href="/business/accessories" className="dropdown-item">Accessories</a>
                </div>
              </div>

              <div className="nav-item dropdown">
                <a href="/industry" className="nav-link dropdown-toggle">
                  For Industry
                </a>
                <div className="dropdown-menu">
                  <a href="/industry/m2m" className="dropdown-item">4G / 5G M2M</a>
                  <a href="/industry/decs" className="dropdown-item">D-ECS</a>
                  <a href="/industry/switches" className="dropdown-item">Industry Switches</a>
                  <a href="/industry/accessories" className="dropdown-item">Accessories</a>
                </div>
              </div>

              <div className="nav-item dropdown">
                <a href="/support" className="nav-link dropdown-toggle">
                  Support
                </a>
                <div className="dropdown-menu">
                  <a href="/support/tech-support" className="dropdown-item">Tech Support</a>
                  <a href="/support/tech-alerts" className="dropdown-item">Tech Alerts</a>
                  <a href="/support/faqs" className="dropdown-item">FAQs</a>
                  <a href="/support/services" className="dropdown-item">Services</a>
                  <a href="/support/warranty" className="dropdown-item">Warranty</a>
                  <a href="/support/contact" className="dropdown-item">Contact</a>
                  <a href="/support/portal" className="dropdown-item">Support Portal</a>
                </div>
              </div>

              <div className="nav-item dropdown">
                <a href="/resources" className="nav-link dropdown-toggle">
                  Resources
                </a>
                <div className="dropdown-menu">
                  <a href="/resources/brochures" className="dropdown-item">Brochures and Guides</a>
                  <a href="/resources/case-studies" className="dropdown-item">Case Studies</a>
                  <a href="/resources/videos" className="dropdown-item">Videos</a>
                  <a href="/resources/blog" className="dropdown-item">Blog</a>
                  <a href="/resources/product-selector" className="dropdown-item">Product Selector</a>
                </div>
              </div>
            </div>

            {/* Language Selector */}
            <div className="dlink-language-selector">
              <select className="language-select">
                <option value="en">EN</option>
                <option value="gb">GB</option>
              </select>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="dlink-mobile-toggle d-lg-none"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="dlink-mobile-menu d-lg-none">
            <div className="container">
              <div className="mobile-nav-content">
                <a href="/home" className="mobile-nav-link">For Home</a>
                <a href="/business" className="mobile-nav-link">For Business</a>
                <a href="/industry" className="mobile-nav-link">For Industry</a>
                <a href="/support" className="mobile-nav-link">Support</a>
                <a href="/resources" className="mobile-nav-link">Resources</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
