import React from 'react';

function SearchBar({ onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by description"
      onChange={handleInputChange}
    />
  );
}

export default SearchBar;