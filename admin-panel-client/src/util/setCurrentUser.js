import useAuthToken from "./useAuthToken";
import jwt_decode from "jwt-decode";
import store from "../store/store";
import { SET_USER } from "../actions/types/types";

if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  useAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch({
    type: SET_USER,
    payload: decoded
  });

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch({
      type: SET_USER,
      payload: {}
    });
    // Redirect to login
    window.location.href = "./login";
  }
}
