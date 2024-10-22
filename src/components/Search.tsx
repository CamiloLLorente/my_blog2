import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-8">
      <input
        type="text"
        placeholder="Buscar artículos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#004694]"
      />
      <button
        type="submit"
        className="bg-[#004694] text-white px-4 py-2 rounded-r-md hover:bg-[#003674] transition-colors"
      >
        <SearchIcon size={20} />
      </button>
    </form>
  );
};

export default Search;