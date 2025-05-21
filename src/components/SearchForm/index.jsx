import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      onSearch(search.trim());
      setSearch('');
    }
  };

  return (
    <form onSubmit={handleSubmit} id="search-form" className="mb-3">
      <input
        id="search-input"
        className="form-control"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit" className="btn btn-primary mt-2">Search</button>
    </form>
  );
}

export default SearchForm;
