import React, { useState } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../styles/App.css";
import logo from "./nasa-worm-logo.jpg";

import Search from "./Search";
import ImageResults from "./ImageResults";
import ImageDetail from "./ImageDetail";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [imageDetail, setImageDetail] = useState({});

  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <img src={logo} className="logo" alt="NASA logo" />

        <Switch>
          <Route exact path="/">
            <Search setSearchResults={setSearchResults} />

            <ImageResults
              searchResults={searchResults}
              setImageDetail={setImageDetail}
              imageDetail={imageDetail}
            />
          </Route>
          <Route
            exact
            path="/image-detail"
            render={(props) => (
              <ImageDetail {...props} imageDetail={imageDetail} />
            )}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
