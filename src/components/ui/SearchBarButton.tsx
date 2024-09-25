import React from 'react';
import { Search } from "lucide-react";

interface SearchButtonProps {
    className?: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({ className = "" }) => {
    return (
        <button
            type="submit"
            className={`h-10 w-16 bg-slate-900 text-white rounded-r-md hover:bg-slate-500 flex justify-center items-center border border-gray-400 border-l-0 ${className}`}>
            <Search className="h-5 w-5"/>
        </button>
    );
};

export default SearchButton;
