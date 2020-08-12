import React from "react";

import "../styles/Search.css";

const Search = () => {
  return (
    <div className="search" data-testid="search-test">
      <form>
        <label htmlFor="search-input">
          <input
            id="search-input"
            name="search-input"
            type="text"
            className="search-input"
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
