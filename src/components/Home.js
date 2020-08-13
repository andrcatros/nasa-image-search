import React from "react";

import Search from "./Search";
import ImageResults from "./ImageResults";

import logo from "./nasa-worm-logo.jpg";
import "../styles/Home.css";

const Home = ({ searchResults, setSearchResults, setImageDetail }) => {
  let resultsMessage = "";
  if (searchResults.length) {
    resultsMessage = "Click on any of the images to see more information.";
  }

  return (
    <div className="home">
      <img src={logo} className="logo" alt="NASA logo" />

      <Search setSearchResults={setSearchResults} />
      <div className="results-message"> {resultsMessage} </div>
      <ImageResults
        searchResults={searchResults}
        setImageDetail={setImageDetail}
      />
    </div>
  );
};

export default Home;
