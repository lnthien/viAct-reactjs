import React, { useEffect } from "react";
import { fetchMovie } from "../actionCreators/fetchMovie";
import { Route, Switch, useRouteMatch, withRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { connect } from "react-redux";
import "typeface-roboto";

import LeftLayout from "../components/moviepage/layouts/LeftLayout";
import BottomLayout from "../components/moviepage/layouts/BottomLayout";
import Navbar from "../components/moviepage/Navbar";
import Details from "../components/moviepage/Details";

import Loader from "../components/Helper/Loader";

import AltPoster from "../components/movielist/posterplaceholder.jpg";
const MasterWrap = styled.div`
  @media screen and (max-width: 799px) {
  }
`;

const NewMoviePage = (props) => {
  const {
    movie = "",
    images,
    fetchMovie,
    isLoading
  } = props;

  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1023px)" });

  // If movieId passed into data fetch endpoint does not exist in state, just use the id from the URL.
  const fetchUrl = `${props.match.params.id}`;

  useEffect(() => {
    fetchMovie(fetchUrl);
  }, [fetchMovie, fetchUrl]);

  let { path, /*url*/ } = useRouteMatch();

  const posterURL = "https://image.tmdb.org/t/p/original";
  let backdropImage;

  if (images) {
    backdropImage = `${posterURL}${images}`;
  } else {
    backdropImage = AltPoster;
  }

  return (
    <>
      {!isLoading && movie ? (
        <MasterWrap>
          <Navbar />
          <Switch>
            <Route path={`${path}/details`}>
              {isMobileOrTablet ? (
                <BottomLayout backdropImage={backdropImage}>
                  <Details />
                </BottomLayout>
              ) : (
                <LeftLayout backdropImage={backdropImage}>
                  <Details />
                </LeftLayout>
              )}
            </Route>
          </Switch>
        </MasterWrap>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movie.movie,
    images: state.movie.images,
    clickedMovieId: state.movie.clickedMovieId,
    isLoading: state.movie.isLoading,
    isError: state.movie.isError,
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchMovie })(NewMoviePage)
);
