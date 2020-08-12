import React from "react";

import "../styles/App.css";

import Search from "./Search";

function App() {
  return (
    <div className="App">
      <img src="nasa-worm-logo.jpg" className="logo" alt="NASA logo" />
      <p>Hello World</p>

      <Search />
    </div>
  );
}

export default App;
