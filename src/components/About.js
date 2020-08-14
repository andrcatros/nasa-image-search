import React from "react";

import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        This website uses React and React Router to enable users to search for
        images in the <a href="https://api.nasa.gov/">NASA Images APIs</a>.
        Simply input a valid search query (e.g. "moon", "Saturn", "space" etc)
        into the search box and the app will fetch images from the API. If you
        do not provide a valid search query, the app will display the message{" "}
        <i>No results found! Please enter a valid search term.</i>{" "}
      </p>
      <p>
        {" "}
        I based this project on learning materials created by{" "}
        <a href="https://github.com/MCRcodes">Manchester Codes</a> and I
        bootstrapped it with{" "}
        <a href="https://github.com/facebook/create-react-app">
          Create React App
        </a>
        .
      </p>{" "}
      <p>
        {" "}
        If you would like to have a look at my code, check out my{" "}
        <a href="https://github.com/andrcatros/nasa-image-search">
          GitHub repo
        </a>
        .
      </p>
    </div>
  );
};

export default About;
