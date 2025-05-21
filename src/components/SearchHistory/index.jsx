import React from 'react';

function SearchHistory({ history, onSearch }) {
  return (
    <div id="weather-history" className="mb-4">
      {history.map((item, index) => (
        <button
          key={index}
          type="button"
          className="btn btn-secondary history-button me-2 mb-2"
          onClick={() => onSearch(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default SearchHistory;
