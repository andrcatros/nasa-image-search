import React, { useState } from "react";

import "../styles/Search.css";
import getImages from "./getImages";

const Search = ({ setSearchResults }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imagesArray = await getImages(search);

    // invalid search queries do not return a 404 status code from the NASA API so to clearly differentiate searchResults's state
    // after invalid query from searchResult's initial state (empty array) I have set searchResults to ["invalid query"]
    if (imagesArray.length === 0) {
      setSearchResults(["invalid query"]);
    } else {
      setSearchResults(imagesArray);
    }

    setSearch("");
  };

  return (
    <div className="search-form" data-testid="search-test">
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
