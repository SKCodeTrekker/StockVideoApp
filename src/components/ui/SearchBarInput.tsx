import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, className = "" }) => {
  return (
    <div className={className}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchInput;
