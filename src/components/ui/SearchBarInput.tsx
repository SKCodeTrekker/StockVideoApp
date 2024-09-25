import React from 'react';

interface SearchInputProps {
    placeholder?: string;
    className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = "Search here", className = "" }) => {
    return (
        <input
            placeholder={placeholder}
            className={`rounded-l-md grow border border-gray-400 p-2 h-10 focus:outline-none ${className}`}
        />
    );
};

export default SearchInput;
