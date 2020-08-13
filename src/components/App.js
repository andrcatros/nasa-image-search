import React, { useState } from "react";

import "../styles/App.css";
import logo from "./nasa-worm-logo.jpg";

import Search from "./Search";
import ImageResults from "./ImageResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="App">
      <img src={logo} className="logo" alt="NASA logo" />

      <Search setSearchResults={setSearchResults} />

      {searchResults && <ImageResults searchResults={searchResults} />}
    </div>
  );
}

export default App;
