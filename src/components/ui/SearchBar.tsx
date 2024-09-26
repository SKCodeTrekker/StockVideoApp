import React from 'react';
import SearchInput from './SearchBarInput';
import SearchButton from './SearchBarButton';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, className = "" }) => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className={`flex items-center w-full ${className}`}>
      <SearchInput value={searchTerm} onChange={handleSearchInputChange} className='flex grow'/>
      <SearchButton />
    </form>
  );
};

export default SearchBar;
