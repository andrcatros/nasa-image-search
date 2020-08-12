import React, { useState } from "react";

import "../styles/Search.css";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search" data-testid="search-test">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">
          <input
            id="search-input"
            name="search-input"
            type="text"
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="search-button"
          data-testid="search-button-test"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
