import React from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { handleMovieClick } from "../../actionCreators/handleMovieClick";
import AltPoster from "./posterplaceholder.jpg";

const CardContainer = styled.div`
  position: relative;
  flex: 0 0 calc(10% - 40px);
  margin: 36px 20px;
  display: flex;

  /* margin: 1.55vw 1vw; */

  border-radius: 10px 10px 0 0;
  transition: transform ease 300ms;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  color: white;

  :hover {
    cursor: pointer;

    backface-visibility: hidden;
    transform: scale(1.05);
  }

  :active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 3000px) {
    flex: 0 0 calc(14.2857% - 36px);
    margin: 24px 18px;
  }

  @media screen and (max-width: 1921px) {
    flex: 0 0 calc(16.6667% - 28px);
    margin: 22px 14px;
  }

  @media screen and (max-width: 1440px) {
    flex: 0 0 calc(20% - 20px);
    margin: 15px 10px;
  }

  @media screen and (max-width: 1025px) {
    flex: 0 0 calc(25% - 16px);
    margin: 10px 8px;
  }

  @media screen and (max-width: 779px) {
    flex: 0 0 calc(33.33% - 16px);
    margin: 10px 8px;
  }

  @media screen and (max-width: 361px) {
    /* flex: 1 0 33%; */
    flex: 0 0 calc(50% - 10px);
    margin: 10px 5px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledRating = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0.25rem;
  padding: 0.3rem;
  border-radius: 10%;
  background-color: rgba(0, 0, 0, 0.808);
`;

const RatingIcon = styled(FontAwesomeIcon).attrs({ icon: faStar })`
  color: gold;
  margin: 0 0.25rem 0 0;
`;

const MovieCard = (props) => {
  const { path } = useRouteMatch();

  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const { posterPath, title, voteAverage, id } = props.movie;
  const imageURL = `https://image.tmdb.org/t/p/w780${posterPath}`;

  let renderRating;
  if (!isMobile && voteAverage !== 0) {
    renderRating = (
      <StyledRating>
        <RatingIcon />
        {voteAverage}
      </StyledRating>
    );
  }

  return (
    <CardContainer>
      <StyledImg
        src={posterPath ? imageURL : AltPoster}
        onClick={() => props.handleMovieClick(id, path)}
        alt={`${title} poster`}
      />
      {renderRating}
    </CardContainer>
  );
};

const mapStateToProps = ({ favorites }) => ({
  // removeMode: favorites.removeMode,
});

export default connect(mapStateToProps, { handleMovieClick })(
  MovieCard
);
