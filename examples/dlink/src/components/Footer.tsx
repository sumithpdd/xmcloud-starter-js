import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="dlink-footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="dlink-footer-main">
          <div className="row">
            {/* For Home Section */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="footer-title">For Home</h5>
              <ul className="footer-links">
                <li><a href="/home/wifi">Wi-Fi</a></li>
                <li><a href="/home/4g-5g">4G/5G</a></li>
                <li><a href="/home/cameras">Cameras</a></li>
                <li><a href="/home/smart-home">Smart Home</a></li>
                <li><a href="/home/switches">Switches</a></li>
                <li><a href="/home/adapters">Adapters</a></li>
                <li><a href="/home/mydlink">mydlink</a></li>
              </ul>
            </div>

            {/* For Business Section */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="footer-title">For Business</h5>
              <ul className="footer-links">
                <li><a href="/business/switches">Switches</a></li>
                <li><a href="/business/wireless">Wireless</a></li>
                <li><a href="/business/routers">Business Routers</a></li>
                <li><a href="/business/nuclias">Nuclias</a></li>
                <li><a href="/business/surveillance">IP Surveillance</a></li>
                <li><a href="/business/accessories">Accessories</a></li>
              </ul>
            </div>

            {/* For Industry Section */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="footer-title">For Industry</h5>
              <ul className="footer-links">
                <li><a href="/industry/m2m">4G / 5G M2M</a></li>
                <li><a href="/industry/decs">D-ECS</a></li>
                <li><a href="/industry/switches">Industry Switches</a></li>
                <li><a href="/industry/accessories">Accessories</a></li>
              </ul>
            </div>

            {/* Support & Resources Section */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="footer-title">Support & Resources</h5>
              <ul className="footer-links">
                <li><a href="/support/tech-support">Tech Support</a></li>
                <li><a href="/support/tech-alerts">Tech Alerts</a></li>
                <li><a href="/support/faqs">FAQs</a></li>
                <li><a href="/support/services">Services</a></li>
                <li><a href="/support/warranty">Warranty</a></li>
                <li><a href="/support/contact">Contact</a></li>
                <li><a href="/support/portal">Support Portal</a></li>
                <li><a href="/resources/brochures">Brochures and Guides</a></li>
                <li><a href="/resources/case-studies">Case Studies</a></li>
                <li><a href="/resources/videos">Videos</a></li>
                <li><a href="/resources/blog">Blog</a></li>
                <li><a href="/resources/product-selector">Product Selector</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="dlink-footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms of use</a>
                <a href="/sitemap">Sitemap</a>
                <a href="/cookies">Cookie Declaration</a>
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="copyright">
                © D-Link Corporation. All rights reserved.<br />
                No. 289, Xinhu 3rd Road Neihu District, Taipei 11494 Taiwan
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
