import React, { useState, useEffect } from "react";
import axios from "axios";

import "../styles/ImageOfTheDay.css";

const ImageOfTheDay = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=coaFrAAxqfdxQK0pdOykbNSv747QijY1NVOQ9Kvz"
      );

      setImage(result.data);
    };
    getData();
  }, []);

  console.log(image);

  return (
    <div className="image-of-the-day">
      {image && <img src={image.url} alt={image.explanation} />}
      <div className="image-of-the-day-description">
        <h4>Title</h4> {image.title}
        <h4>Description</h4> {image.explanation}
      </div>
    </div>
  );
};

export default ImageOfTheDay;
