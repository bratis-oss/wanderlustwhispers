
import React from 'react';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {children}
    </div>
  );
};

interface BentoItemProps {
  title: string;
  image: string;
  category?: string;
  date?: string;
  description?: string;
  link: string;
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}

export const BentoItem: React.FC<BentoItemProps> = ({
  title,
  image,
  category,
  date,
  description,
  link,
  size = 'medium',
  children,
}) => {
  const sizeClasses = {
    small: 'col-span-1',
    medium: 'col-span-1 md:col-span-1',
    large: 'col-span-1 md:col-span-2',
  }[size];

  const imageHeight = {
    small: 'h-48',
    medium: 'h-64',
    large: 'h-80',
  }[size];

  return (
    <div className={`${sizeClasses} group overflow-hidden rounded-xl bg-card shadow-md transition-all duration-300 hover:shadow-lg border border-border`}>
      <a href={link} className="block">
        <div
          className={`${imageHeight} relative overflow-hidden bg-cover bg-center bg-no-repeat`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/40"></div>
          {category && (
            <span className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full text-sm font-medium text-white">
              {category}
            </span>
          )}
        </div>
        <div className="p-5">
          {date && <p className="text-sm text-muted-foreground mb-2">{date}</p>}
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-muted-foreground line-clamp-3">{description}</p>
          )}
          {children}
        </div>
      </a>
    </div>
  );
};

export default BentoGrid;
