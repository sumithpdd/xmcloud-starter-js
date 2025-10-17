import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="nhsp-footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="nhsp-footer-main">
          <div className="row">
            {/* NHSP For You Section */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="footer-title">NHSP For You</h5>
              <ul className="footer-links">
                <li><a href="#joining-nhsp">Joining NHSP</a></li>
                <li><a href="#work-shifts">I work shifts using NHSP</a></li>
                <li><a href="#manage-shifts">I manage shifts using NHSP</a></li>
                <li><a href="#partnering-nhsp">Partnering with NHSP</a></li>
                <li><a href="#apprenticeship">Public Sector Apprenticeship</a></li>
                <li><a href="#corporate-careers">Corporate Careers at NHSP</a></li>
              </ul>
            </div>

            {/* About NHSP Section */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="footer-title">About NHSP</h5>
              <ul className="footer-links">
                <li><a href="#carbon-reduction">Carbon Reduction Plan</a></li>
                <li><a href="#our-values">Our values</a></li>
                <li><a href="#digital-marketplace">Digital Marketplace Services</a></li>
                <li><a href="#equality-diversity">Equality, Diversity and Inclusion</a></li>
                <li><a href="#freedom-information">Freedom of Information Request</a></li>
                <li><a href="#gender-pay-gap">Gender Pay Gap</a></li>
                <li><a href="#modern-slavery">Modern Slavery Statement</a></li>
                <li><a href="#system-status">System Status</a></li>
                <li><a href="#tax-strategy">Tax strategy statement</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="footer-title">Contact Information</h5>
              <div className="footer-contact">
                <p className="address">
                  NHS Professionals Ltd<br />
                  Breakspear Park<br />
                  Breakspear Way<br />
                  Hemel Hempstead<br />
                  HP2 4TZ
                </p>
                <p className="registration">
                  Registered in England & Wales no. 6704614
                </p>
              </div>
            </div>

            {/* Social Media & Additional Links */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="footer-title">Connect With Us</h5>
              <div className="social-links">
                <a href="#" className="social-link facebook" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link instagram" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-link twitter" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link youtube" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="nhsp-footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <a href="#accessibility">Accessibility</a>
                <a href="#cookies-privacy">Cookies and privacy</a>
                <a href="#press-media">Press and media</a>
                <a href="#privacy-notice">Privacy Notice</a>
                <a href="#terms-conditions">Terms and conditions</a>
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="copyright">
                © 2025 NHS Professionals<br />
                Registered in England & Wales no. 6704614
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
