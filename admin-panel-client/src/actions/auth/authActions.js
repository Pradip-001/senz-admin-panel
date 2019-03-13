import axios from "axios";
import { ERRORS, SET_USER } from "../types/types";
import jwt_decode from "jwt-decode";
import useAuthToken from "../../util/useAuthToken";

// Register User
export const registerAction = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: err.response.data
      })
    );
};

export const loginAction = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage

      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      // Set token to Auth header
      useAuthToken(token);

      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch({
        type: SET_USER,
        payload: decoded
      });
    })
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: err.response.data
      })
    );
};
