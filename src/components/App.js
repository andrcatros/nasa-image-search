import React, { useState } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import ImageDetail from "./ImageDetail";
import NavBar from "./NavBar";
import About from "./About";

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

          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
