import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6 w-16',
    md: 'h-8 w-20',
    lg: 'h-12 w-24'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* D-Link Logo Design */}
        <rect x="2" y="8" width="8" height="24" fill="#0051ff" rx="2"/>
        <rect x="12" y="8" width="8" height="24" fill="#0051ff" rx="2"/>
        <rect x="22" y="8" width="8" height="24" fill="#0051ff" rx="2"/>
        <rect x="32" y="8" width="8" height="24" fill="#0051ff" rx="2"/>
        
        {/* Link text */}
        <text x="45" y="28" fontSize="16" fontWeight="600" fill="#0051ff" fontFamily="Inter, sans-serif">
          Link
        </text>
        
        {/* Accent line */}
        <rect x="45" y="32" width="20" height="2" fill="#c8ff00" rx="1"/>
      </svg>
    </div>
  );
};

export default Logo;
