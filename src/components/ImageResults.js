import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "../styles/ImageResults.css";

const ImageResults = ({ searchResults, setImageDetail }) => {
  const onClick = (image) => {
    setImageDetail(image);
  };

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
          <div
            className="card"
            key={image.data[0].nasa_id}
            onClick={() => onClick(image)}
          >
            <Link to="/image-detail">
              <img
                className="card-image"
                src={image.links[0].href}
                alt={image.data[0].description}
              />
            </Link>
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
