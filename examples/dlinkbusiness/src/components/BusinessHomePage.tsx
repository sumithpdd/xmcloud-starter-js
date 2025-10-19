import React from 'react';
import { Navigation } from './ui/Navigation';
import { Hero } from './ui/Hero';
import { Footer } from './ui/Footer';

interface BusinessHomePageProps {
  className?: string;
}

export const BusinessHomePage: React.FC<BusinessHomePageProps> = ({ className = '' }) => {
  return (
    <div className={`min-h-screen bg-white ${className}`}>
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero
        title="Worry-Free Small Business Solution"
        subtitle="DBR Series"
        description="Enjoy secure and reliable connectivity that works seamlessly for your growing business needs."
        ctaText="Explore Solutions"
        ctaHref="/business/solutions"
      />
      
      {/* Business Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scale your business with professional networking solutions designed for reliability and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Business Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Switches</h3>
              <p className="text-gray-600 text-sm mb-4">
                Advanced Layer 2 management and Layer 3 static routing for enterprise networks.
              </p>
              <a href="/business/switches" className="text-primary hover:text-primary-hover font-semibold text-sm">
                Learn more →
              </a>
            </div>
            
            {/* Business Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Wireless Solutions</h3>
              <p className="text-gray-600 text-sm mb-4">
                High-performance wireless access points for seamless business connectivity.
              </p>
              <a href="/business/wireless" className="text-primary hover:text-primary-hover font-semibold text-sm">
                Learn more →
              </a>
            </div>
            
            {/* Business Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cloud Management</h3>
              <p className="text-gray-600 text-sm mb-4">
                Manage your business Wi-Fi remotely with Nuclias Cloud management platform.
              </p>
              <a href="/business/nuclias" className="text-primary hover:text-primary-hover font-semibold text-sm">
                Learn more →
              </a>
            </div>
            
            {/* Business Feature 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">IP Surveillance</h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional security cameras and surveillance systems for business protection.
              </p>
              <a href="/business/surveillance" className="text-primary hover:text-primary-hover font-semibold text-sm">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business Network?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get expert consultation and find the perfect networking solution for your business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/business/consultation"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg text-primary bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              Get Consultation
            </a>
            <a
              href="/business/support"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg text-white hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Business Support
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BusinessHomePage;
