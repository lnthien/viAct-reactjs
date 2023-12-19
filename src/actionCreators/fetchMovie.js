import {
  FETCH_MOVIE_INITIATED,
  FETCH_MOVIE_FAILED,
  FETCH_MOVIE_SUCCEEDED,
} from "./types";
import {GraphQLClient} from "graphql-request";

//! Make One fetchMovie function with optional args or handling for multiple requests...
export const fetchMovie = (url) => async (dispatch) => {
  dispatch({ type: FETCH_MOVIE_INITIATED });

  try {
    console.log('Run here');
    const gqlQueryMovie = `query getMovie($id: String!){
      getMovie(id: $id){
        statusCode
        message
        data {
          adult
          popularity
          posterPath
          backdropPath
          genreIds
          title
          video
          overview
          voteCount
          voteAverage
          id
          originalTitle
          releaseDate
          originalLanguage
        }
      }
    }`;
    const host = `http://localhost:3000/graphql`;
    const client = new GraphQLClient(host);
    const response = await client.request(gqlQueryMovie, {
      id: url
    });

    dispatch({ type: FETCH_MOVIE_SUCCEEDED, payload: response.getMovie.data });
  } catch (error) {
    dispatch({ type: FETCH_MOVIE_FAILED });
    console.error("%cData Fetching Error:", "font-size: 18px", error);
  }
};
