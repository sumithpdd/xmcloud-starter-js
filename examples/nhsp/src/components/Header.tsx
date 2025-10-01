import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="nhsp-header">
      {/* Top Bar */}
      <div className="nhsp-top-bar">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="nhsp-contact">
              <span className="phone">03332 407 552</span>
            </div>
            <div className="nhsp-top-links">
              <a href="#about">About NHSP</a>
              <a href="#join">Join the Bank</a>
              <a href="#contact">Contact Us</a>
              <a href="#login" className="login-link">Login</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="nhsp-main-nav">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* Logo */}
            <div className="nhsp-logo">
              <a href="/">
                <img src="/nhsp-logo.svg" alt="NHS Professionals" className="logo-img" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="nhsp-nav-menu d-none d-lg-flex">
              <div className="nav-item dropdown">
                <a href="#members" className="nav-link dropdown-toggle">
                  Our Members
                </a>
                <div className="dropdown-menu">
                  <a href="#join-now" className="dropdown-item">Join Now</a>
                  <a href="#allied-health" className="dropdown-item">Allied Health Professionals</a>
                  <a href="#doctors" className="dropdown-item">Doctors</a>
                  <a href="#healthcare-scientists" className="dropdown-item">Healthcare Scientists</a>
                  <a href="#hcs-development" className="dropdown-item">Healthcare Support Worker Development Programme</a>
                  <a href="#non-clinical" className="dropdown-item">Non-Clinical</a>
                  <a href="#nursing" className="dropdown-item">Nursing, Midwifery and Healthcare Assistants</a>
                  <a href="#social-workers" className="dropdown-item">Social Workers</a>
                  <a href="#national-bank" className="dropdown-item">National Bank</a>
                  <a href="#wellbeing-hub" className="dropdown-item">Health and Wellbeing Hub</a>
                </div>
              </div>

              <div className="nav-item dropdown">
                <a href="#partner-trusts" className="nav-link dropdown-toggle">
                  Our Partner Trusts & Clients
                </a>
              </div>

              <div className="nav-item dropdown">
                <a href="#services" className="nav-link dropdown-toggle">
                  Our Services
                </a>
                <div className="dropdown-menu">
                  <a href="#why-partner" className="dropdown-item">Why Partner with NHS Professionals</a>
                  <a href="#agency-management" className="dropdown-item">Agency Management</a>
                  <a href="#allied-healthcare" className="dropdown-item">Allied Healthcare Professionals</a>
                  <a href="#hcs-development" className="dropdown-item">Healthcare Support Worker Development Programme</a>
                  <a href="#international-recruitment" className="dropdown-item">International Recruitment</a>
                  <a href="#managed-service" className="dropdown-item">Managed Service Provision</a>
                  <a href="#national-bank" className="dropdown-item">National Bank</a>
                  <a href="#patient-safety" className="dropdown-item">Patient Safety Support Worker Trainee Programme</a>
                  <a href="#non-clinical" className="dropdown-item">Non-Clinical</a>
                  <a href="#academy" className="dropdown-item">NHS Professionals Academy</a>
                  <a href="#publications" className="dropdown-item">Publications</a>
                  <a href="#wards-departments" className="dropdown-item">Wards & Departments</a>
                </div>
              </div>

              <div className="nav-item dropdown">
                <a href="#doctors-direct" className="nav-link dropdown-toggle">
                  Doctors Direct
                </a>
                <div className="dropdown-menu">
                  <a href="#why-doctors-direct" className="dropdown-item">Why Choose Doctors Direct?</a>
                  <a href="#where-work" className="dropdown-item">Where Can I Work?</a>
                  <a href="#vacancies" className="dropdown-item">Vacancies</a>
                  <a href="#news-events" className="dropdown-item">News and Events</a>
                  <a href="#meet-team" className="dropdown-item">Meet the Team</a>
                  <a href="#register" className="dropdown-item">Register</a>
                  <a href="#partner-doctors" className="dropdown-item">Partner with Doctors Direct</a>
                  <a href="#doctors-gateway" className="dropdown-item">Doctors Gateway</a>
                  <a href="#contact" className="dropdown-item">Contact Us</a>
                </div>
              </div>

              <div className="nav-item dropdown">
                <a href="#international" className="nav-link dropdown-toggle">
                  International
                </a>
                <div className="dropdown-menu">
                  <a href="#nursing-adult" className="dropdown-item">Nursing - Adult Care</a>
                  <a href="#nursing-mental" className="dropdown-item">Nursing - Mental Health</a>
                  <a href="#midwifery" className="dropdown-item">Midwifery</a>
                  <a href="#allied-health-professionals" className="dropdown-item">Allied Health Professionals</a>
                  <a href="#doctors" className="dropdown-item">Doctors</a>
                </div>
              </div>

              <div className="nav-item">
                <a href="#help-support" className="nav-link">
                  Help & Support
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="nhsp-mobile-toggle d-lg-none"
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
          <div className="nhsp-mobile-menu d-lg-none">
            <div className="container">
              <div className="mobile-nav-content">
                <a href="#members" className="mobile-nav-link">Our Members</a>
                <a href="#partner-trusts" className="mobile-nav-link">Our Partner Trusts & Clients</a>
                <a href="#services" className="mobile-nav-link">Our Services</a>
                <a href="#doctors-direct" className="mobile-nav-link">Doctors Direct</a>
                <a href="#international" className="mobile-nav-link">International</a>
                <a href="#help-support" className="mobile-nav-link">Help & Support</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
