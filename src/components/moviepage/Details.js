import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import moment from "moment";

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;
  margin: 3rem 1.5rem;

  @media screen and (max-width: 1023px) {
    font-size: 14px;
    width: calc(100% - 7em);
    height: calc(100% - 3.5em);
    margin: 0 3.5em 3.5em 3.5em;
    justify-content: flex-end;
    align-items: stretch;
  }

  @media screen and (max-width: 599px) {
    font-size: 12px;
    width: calc(100% - 3em);
    height: calc(100% - 3.5em);
    margin: 0 1.5em 3.5em 1.5em;
    justify-content: flex-end;
    align-items: stretch;
  }
`;

const BottomContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1500px) and (min-width: 1024px) {
    flex-flow: column;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3em 1em 1em 1em;

  @media screen and (max-width: 1500px) {
    margin: 0.75em auto;
    text-align: left;
  }
`;

const Header = styled.div`
  margin-bottom: 1em;

  @media screen and (max-width: 1023px) {
    margin-bottom: 0.5em;
  }

  h1 {
    font-family: "Titillium Web", sans-serif;
    font-size: 3.5em;
    text-shadow: -1px -1px 1px #aaa, 0px 4px 1px rgba(0, 0, 0, 0.5),
      4px 4px 5px rgba(0, 0, 0, 0.7), 0px 0px 7px rgba(0, 0, 0, 0.4);
    margin: 0 0 0.25em 0;
    padding: 0;

    @media screen and (max-width: 1023px) {
      font-size: 1.667em;
    }
  }

  h2 {
    font-size: 1.25em;
    margin: 0.1em 0;
  }
`;

const MovieTitle = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 3.5em;
  text-shadow: -1px -1px 1px #aaa, 0px 4px 1px rgba(0, 0, 0, 0.5),
    4px 4px 5px rgba(0, 0, 0, 0.7), 0px 0px 7px rgba(0, 0, 0, 0.4);
  margin: 0.15em 0;
  padding: 0;
`;

const DetailTitle = styled(MovieTitle)`
  font-size: 1em;
  font-weight: 600;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1em;
  margin: 0;
`;

const MoviePlot = styled.div`
  margin-top: 3em;

  h1 {
    font-size: 1.25em;
    margin: 0.1em 0;
  }

  p {
    font-size: 1em;
    line-height: 1.4;
    width: 85%;
  }

  @media screen and (max-width: 1023px) {
    margin-top: 0.5em;

    p {
      width: 100%;
    }
  }
`;

const RatingIcon = styled(FontAwesomeIcon).attrs({ icon: faStar })`
  margin: 0 0.25rem;
`;

const Details = ({
  movie = []
}) => {
  const convertedReleaseDate = movie
    ? moment(movie.releaseDate, "YYYY-MM-DD")
    : null;

  return (
    <>
      {movie ? (
        <CenterContainer>
          <Header>
            <h1>{movie.title}</h1>
            <div style={{ display: "flex", marginTop: ".35em" }}>
              {movie.voteAverage !== 0 && (
                <>
                  <h2 style={{ color: "gold", marginLeft: ".5em" }}>
                    <RatingIcon />
                    {movie.voteAverage}
                  </h2>
                </>
              )}
            </div>
          </Header>
          <MoviePlot>
            <h1>Overview</h1>
            <p>{movie.overview}</p>
          </MoviePlot>

          <BottomContainer>
            <DetailContainer>
              <DetailTitle>Release Date:</DetailTitle>
              <Text>{convertedReleaseDate.format("LL")}</Text>
            </DetailContainer>
          </BottomContainer>
        </CenterContainer>
      ) : null}
    </>
  );
};

const mapStateToProps = ({ movie, favorites }) => ({
  movie: movie.movie
});

export default connect(mapStateToProps, {})(
  Details
);
