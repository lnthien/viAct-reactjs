import React from "react";
import { connect } from "react-redux";
import { Trail } from "react-spring/renderprops";

import styled from "styled-components";

import MovieCard from "./MovieCard";

const MovieContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 3em 3.5em;

  @media screen and (max-width: 3000px) {
    padding: 2em 2.5em;
  }

  @media screen and (max-width: 2000px) {
    padding: 2em 2.5em;
  }

  @media screen and (max-width: 1440px) {
    padding: 1.5em;
  }

  @media screen and (max-width: 1025px) {
    padding: 1em 0.65em;
  }

  @media screen and (max-width: 640px) {
    padding: 0.35em;
  }

  @media screen and (max-width: 361px) {
    padding: 0.25em;
  }
`;

const config = { mass: 5, tension: 2000, friction: 200 };

const MovieList = ({ movies, favorites, showFavorites = false }) => {
  let renderedList = showFavorites ? favorites : movies;

  return (
    <MovieContainer>
      <Trail
        config={config}
        items={renderedList}
        keys={(movie) => movie.id}
        from={{
          opacity: 0,
        }}
        to={{ opacity: 1 }}
      >
        {(movie) => (props) => (
          <>
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          </>
        )}
      </Trail>
    </MovieContainer>
  );
};

const mapStateToProps = ({ movies, favorites }) => ({
  movies: movies.movies
});

export default connect(mapStateToProps)(MovieList);
