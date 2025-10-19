import { Default as ImageWrapper } from '@/components/image/ImageWrapper.dev';
import type React from 'react';
import { LogoProps } from './logo.props';
import { cn } from '@/lib/utils';

export const Default: React.FC<LogoProps> = (props) => {
  const { logo, className = '' } = props;

  // D-Link logo SVG fallback
  const DLinkLogoSVG = () => (
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-8 w-auto', className)}
    >
      <rect width="120" height="40" rx="4" fill="#0051ff"/>
      <text
        x="60"
        y="26"
        textAnchor="middle"
        fill="white"
        fontSize="16"
        fontWeight="bold"
        fontFamily="Inter, sans-serif"
      >
        D-Link
      </text>
    </svg>
  );

  if (!logo?.value?.src) {
    return <DLinkLogoSVG />;
  }

  return (
    <ImageWrapper
      image={logo}
      className={cn('w-full object-contain', className)}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      alt="D-Link"
    />
  );
};
