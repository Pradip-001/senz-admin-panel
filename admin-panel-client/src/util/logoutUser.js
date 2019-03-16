import useAuthToken from "./useAuthToken";
import {
  SET_USER,
  UNMOUNT_PROJECTS,
  UNMOUNT_DEVICES
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
    type: UNMOUNT_PROJECTS
  });
  dispatch({
    type: UNMOUNT_DEVICES
  });

  window.location = "/login";
};
