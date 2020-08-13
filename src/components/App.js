import React, { useState } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import ImageDetail from "./ImageDetail";
import NavBar from "./NavBar";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [imageDetail, setImageDetail] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                setImageDetail={setImageDetail}
              />
            )}
          ></Route>
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
