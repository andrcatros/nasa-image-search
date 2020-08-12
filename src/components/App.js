import React, { useState } from "react";

import "../styles/App.css";

import Search from "./Search";
import ImageResults from "./ImageResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="App">
      <img src="nasa-worm-logo.jpg" className="logo" alt="NASA logo" />

      <Search setSearchResults={setSearchResults} />

      <ImageResults searchResults={searchResults} />
    </div>
  );
}

export default App;
