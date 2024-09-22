import React, { useState } from 'react';

interface SearchResult {
  id: string;
  title: string;
  url: string;
}

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = async () => {
    // Call backend API to search images/videos
    // const response = await fetch(`/api/search?q=${query}`);
    // const data = await response.json();
    // setResults(data);
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images or videos"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.url} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;