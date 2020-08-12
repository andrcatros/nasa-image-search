import React from "react";
import PropTypes from "prop-types";

import "../styles/ImageResults.css";

const ImageResults = ({ searchResults }) => {
  if (searchResults[0] === "invalid query") {
    return (
      <div className="image-results-error">
        <p>No results found! Please enter a valid search term.</p>
      </div>
    );
  } else {
    return (
      <div className="image-results" data-testid="image-results-test">
        {searchResults.map((image, i) => (
          <div className="card" key={image.data[0].nasa_id}>
            <img
              className="card-image"
              src={image.links[0].href}
              alt={image.data[0].description}
            />
            <div className="card-text">{image.data[0].title} </div>
          </div>
        ))}
      </div>
    );
  }
};

ImageResults.propTypes = {
  searchResults: PropTypes.array,
};

export default ImageResults;
