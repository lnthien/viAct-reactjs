import history from "../components/history";

export const handleMovieClick = (id, path) => async (dispatch) => {

  let navigationPath = `${path}/${id}/details`;

  history.push(navigationPath);
};
