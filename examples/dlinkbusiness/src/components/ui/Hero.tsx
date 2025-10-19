import React from 'react';
import { Logo } from './Logo';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage?: string;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  backgroundImage,
  className = ''
}) => {
  return (
    <div className={`relative bg-gradient-to-br from-blue-50 to-white py-20 ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230051ff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Logo size="lg" />
          </div>
          
          {/* Subtitle */}
          <p className="text-lg text-primary font-semibold mb-4 tracking-wide uppercase">
            {subtitle}
          </p>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={ctaHref}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-primary hover:bg-primary-hover transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {ctaText}
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            
            {/* Secondary CTA */}
            <a
              href="#learn-more"
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-lg font-semibold rounded-lg text-primary hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
          
          {/* Accent Line */}
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;