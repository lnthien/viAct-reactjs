import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchMovies } from "../actionCreators/fetchMovies";
import Loader from "../components/Helper/Loader";
import MovieList from "../components/movielist/MovieList";

const Wrapper = styled.div`
  margin-top: 4em;

  @media screen and (max-width: 500px) {
    margin-top: 3em;
  }
`;

const PageText = styled.h1`
  font-size: 1em;
  margin: 0 6em;
  color: #7ca579;

  @media screen and (max-width: 500px) {
    margin: 1em;
  }
`;

const PopularMovies = ({ isError, isLoading, fetchMovies }) => {
  const url = ``;

  useEffect(() => {
    fetchMovies(url);
  }, [fetchMovies, url]);

  return (
    <Wrapper>
      <PageText>Currently trending movies.</PageText>
      {isError && <div>An error occured, please try again.</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MovieList />
        </>
      )}
    </Wrapper>
  );
};

const mapStateToProps = ({ movies }) => ({
  isError: movies.isError,
  isLoading: movies.isLoading,
});

export default connect(mapStateToProps, { fetchMovies })(PopularMovies);
