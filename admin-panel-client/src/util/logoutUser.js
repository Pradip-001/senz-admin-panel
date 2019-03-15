import useAuthToken from "./useAuthToken";
import {
  SET_USER,
  PROJECT_RECEIVED,
  FETCH_PROJECTS,
  LOGOUT_PROJECTS
} from "../actions/types/types";

export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");

  // Remove auth header for future requests
  useAuthToken(false);

  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch({
    type: SET_USER,
    payload: {}
  });
  dispatch({
    type: LOGOUT_PROJECTS
  });

  window.location = "/login";
};
