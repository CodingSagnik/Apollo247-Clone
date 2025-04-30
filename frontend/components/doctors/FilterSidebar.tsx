import React from 'react';

type FilterOption = {
  id: string;
  label: string;
};

interface Filters {
  gender: string;
  experience: string;
  availability: string[];
  language: string[];
  location: string;
  fee: { min: number; max: number };
  [key: string]: any; // Add index signature for string keys
}

type FilterSidebarProps = {
  experienceOptions: FilterOption[];
  languageOptions: FilterOption[];
  availabilityOptions: FilterOption[];
  locationOptions: FilterOption[];
  filters: Filters;
  onFilterChange: (type: string, value: any) => void;
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  experienceOptions,
  languageOptions,
  availabilityOptions,
  locationOptions,
  filters,
  onFilterChange
}) => {
  // Helper function to handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, filterType: string) => {
    const { value, checked } = e.target;
    const currentValues = filterType === 'availability' || filterType === 'language' 
      ? [...filters[filterType] as string[]] 
      : [];
    
    if (checked) {
      onFilterChange(filterType, [...currentValues, value]);
    } else {
      onFilterChange(filterType, currentValues.filter(v => v !== value));
    }
  };

  // Helper function to handle radio button changes
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>, filterType: string) => {
    const { value } = e.target;
    onFilterChange(filterType, value);
  };

  // Helper function to render a filter section with checkboxes
  const renderCheckboxFilterSection = (title: string, options: FilterOption[], filterType: string) => (
    <div className="mb-6">
      <h3 className="text-base font-semibold mb-3 text-apollo-dark border-b pb-2">{title}</h3>
      <div className="space-y-3 pl-1">
        {options.map(option => (
          <div key={option.id} className="flex items-center">
            <input
              type="checkbox"
              id={`${filterType}-${option.id}`}
              value={option.id}
              checked={(filters[filterType] as string[])?.includes(option.id)}
              onChange={(e) => handleCheckboxChange(e, filterType)}
              className="h-4 w-4 text-apollo-blue focus:ring-apollo-blue border-gray-300 rounded"
            />
            <label
              htmlFor={`${filterType}-${option.id}`}
              className="ml-3 text-sm text-apollo-grey cursor-pointer hover:text-apollo-dark transition-colors"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  // Helper function to render a filter section with radio buttons
  const renderRadioFilterSection = (title: string, options: FilterOption[], filterType: string) => (
    <div className="mb-6">
      <h3 className="text-base font-semibold mb-3 text-apollo-dark border-b pb-2">{title}</h3>
      <div className="space-y-3 pl-1">
        {options.map(option => (
          <div key={option.id} className="flex items-center">
            <input
              type="radio"
              id={`${filterType}-${option.id}`}
              name={filterType}
              value={option.id}
              checked={filters[filterType] === option.id}
              onChange={(e) => handleRadioChange(e, filterType)}
              className="h-4 w-4 text-apollo-blue focus:ring-apollo-blue border-gray-300"
            />
            <label
              htmlFor={`${filterType}-${option.id}`}
              className="ml-3 text-sm text-apollo-grey cursor-pointer hover:text-apollo-dark transition-colors"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  // Render gender filter section
  const renderGenderFilter = () => (
    <div className="mb-6">
      <h3 className="text-base font-semibold mb-3 text-apollo-dark border-b pb-2">Gender</h3>
      <div className="space-y-3 pl-1">
        <div className="flex items-center">
          <input
            type="radio"
            id="gender-male"
            name="gender"
            value="male"
            checked={filters.gender === 'male'}
            onChange={(e) => handleRadioChange(e, 'gender')}
            className="h-4 w-4 text-apollo-blue focus:ring-apollo-blue border-gray-300"
          />
          <label htmlFor="gender-male" className="ml-3 text-sm text-apollo-grey cursor-pointer hover:text-apollo-dark transition-colors">
            Male
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="gender-female"
            name="gender"
            value="female"
            checked={filters.gender === 'female'}
            onChange={(e) => handleRadioChange(e, 'gender')}
            className="h-4 w-4 text-apollo-blue focus:ring-apollo-blue border-gray-300"
          />
          <label htmlFor="gender-female" className="ml-3 text-sm text-apollo-grey cursor-pointer hover:text-apollo-dark transition-colors">
            Female
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="bg-gray-50 py-3 px-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-apollo-dark">Filters</h2>
          <button 
            className="text-sm text-apollo-blue hover:underline focus:outline-none font-medium"
            onClick={() => {
              onFilterChange('gender', '');
              onFilterChange('experience', '');
              onFilterChange('availability', []);
              onFilterChange('language', []);
              onFilterChange('location', '');
              onFilterChange('fee', { min: 0, max: 2000 });
            }}
          >
            Clear All
          </button>
        </div>
      </div>
      
      <div className="p-4">
        {renderGenderFilter()}
        {renderRadioFilterSection('Experience', experienceOptions, 'experience')}
        {renderCheckboxFilterSection('Availability', availabilityOptions, 'availability')}
        {renderRadioFilterSection('Location', locationOptions, 'location')}
        {renderCheckboxFilterSection('Languages', languageOptions, 'language')}
        
        {/* Fee Range Filter */}
        <div className="mb-6">
          <h3 className="text-base font-semibold mb-3 text-apollo-dark border-b pb-2">Consultation Fee</h3>
          <div className="px-2 mt-4">
            <input
              type="range"
              min="0"
              max="2000"
              step="100"
              value={filters.fee.max}
              onChange={(e) => onFilterChange('fee', { min: 0, max: parseInt(e.target.value) })}
              className="w-full accent-apollo-blue h-2 rounded"
            />
            <div className="flex justify-between text-xs text-apollo-grey mt-2">
              <span>₹0</span>
              <span>₹{filters.fee.max}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
