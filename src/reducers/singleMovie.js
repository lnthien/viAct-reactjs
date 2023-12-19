import {
  FETCH_MOVIE_INITIATED,
  FETCH_MOVIE_FAILED,
  FETCH_MOVIE_SUCCEEDED
} from "../actionCreators/types";

const INITIAL_STATE = {
  movie: null,
  images: null,
  isError: false,
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIE_INITIATED:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case FETCH_MOVIE_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case FETCH_MOVIE_SUCCEEDED:
      console.log(action.payload);
      return {
        ...state,
        movie: action.payload,
        images: action.payload.backdropPath ,
        isError: false,
        isLoading: false,
      };

    default:
      return state;
  }
};
