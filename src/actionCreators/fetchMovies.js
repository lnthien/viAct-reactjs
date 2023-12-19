import { GraphQLClient } from 'graphql-request';
import {
  FETCH_MOVIES_INITIATED,
  FETCH_MOVIES_SUCCEEDED,
  FETCH_MOVIES_FAILED,
  SEARCH_QUERY_SUBMITTED,
} from "./types";

export const fetchMovies = (url, query = "") => async (dispatch) => {
  if (query) {
    dispatch({ type: SEARCH_QUERY_SUBMITTED, payload: query });
  }

  dispatch({ type: FETCH_MOVIES_INITIATED });
  try {
    const gqlQueryMovies = `query getMovies{
      getMovies{
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
    const response = await client.request(gqlQueryMovies);

    // await Promise.all(
    //   response.getMovies.data.map(async (movie) => {
    //     const responseDetails = await client.request(gqlQueryMovie, {
    //       id: movie.id
    //     })
    //     movie.details = responseDetails.getMovie.data;
    //   })
    // );

    dispatch({ type: FETCH_MOVIES_SUCCEEDED, payload: response.getMovies.data });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILED });
    console.error("%cData Fetching Error:", "font-size: 18px", error);
  }
};
