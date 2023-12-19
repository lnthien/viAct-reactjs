import { hot } from "react-hot-loader/root";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./history";
import React from "react";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import Navigation from "../components/Navigation/Navigation";
import PopularMovies from "../pages/PopularMovies";
import NewMoviePage from "../pages/NewMoviePage";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 100%;
  
  @media screen and (max-width: 1601px) {
    font-size: 80%;
  }

  @media screen and (max-width: 1023px) {
    font-size: 62.5%;
  }
}

  body {
    font-family: "Titillium Web", sans-serif;  
     /* font-family: "Nunito", sans-serif; */
    background-color: #2c3949;
    box-sizing: border-box;
    color: white;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router history={history}>
        <Navigation />
        <Switch>
          <Redirect exact from="/" to="/popular" />
          <Route exact path="/popular" component={PopularMovies} />
          <Route
            path={[
              "/popular/:id"
            ]}
            component={NewMoviePage}
          />
        </Switch>
      </Router>
    </>
  );
};

export default process.env.NODE_ENV === "development" ? hot(App) : App;
