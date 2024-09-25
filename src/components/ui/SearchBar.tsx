// SearchBar.tsx
import React from 'react';
import SearchInput from './SearchBarInput';
import SearchButton from './SearchBarButton';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, className = "" }) => {
  return (
    <form className={`flex items-center w-full ${className}`}>
      <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <SearchButton />
    </form>
  );
};

export default SearchBar;