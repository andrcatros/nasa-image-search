import React from "react";

import "../styles/ImageResults.css";

const ImageResults = ({ searchResults }) => {
  return (
    <div className="image-results" data-testid="image-results-test">
      {searchResults.map((image) => (
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
};

export default ImageResults;
