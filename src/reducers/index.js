import { combineReducers } from "redux";
import singleMovie from "./singleMovie";
import multipleMovies from "./multipleMovies";

export default combineReducers({
  movie: singleMovie,
  movies: multipleMovies
});
