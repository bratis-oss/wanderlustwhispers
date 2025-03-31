
import React from 'react';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterButtonsProps {
  options: FilterOption[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
  className?: string;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  options,
  activeFilter,
  onFilterChange,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {options.map((option) => (
        <button
          key={option.id}
          className={`filter-button ${activeFilter === option.id ? 'active' : ''}`}
          onClick={() => onFilterChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
