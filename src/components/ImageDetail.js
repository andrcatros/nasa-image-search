import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import "../styles/ImageDetail.css";

const ImageDetail = ({ imageDetail }) => {
  console.log(imageDetail);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="image-detail" onSubmit={handleSubmit}>
      <div className="image-detail-panel">
        <img
          className="image-detail-photo"
          src={imageDetail.links[0].href}
          alt={imageDetail.data[0].description}
        />
        <div className="image-detail-description">
          <h3>Title:</h3> {imageDetail.data[0].title} <br />
          <h3>Description: </h3>
          {imageDetail.data[0].description} <br />
          <h3>Date created: </h3>{" "}
          {moment(imageDetail.data[0].date_created).format("DD MMM YYYY")}
        </div>
      </div>

      <form name="Go back to results">
        <Link to="/">
          <button
            type="submit"
            className="go-back-button"
            data-testid="go-back-button-test"
          >
            Back to Image Results
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ImageDetail;
