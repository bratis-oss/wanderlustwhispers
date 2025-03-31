
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: 'small' | 'medium' | 'large';
  overlay?: boolean;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  height = 'medium',
  overlay = true,
  children,
}) => {
  const heightClass = {
    small: 'min-h-[40vh]',
    medium: 'min-h-[60vh]',
    large: 'min-h-[80vh]',
  }[height];

  return (
    <section
      className={`relative ${heightClass} flex items-center justify-center bg-cover bg-center overflow-hidden`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>}
      <div className="container relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
