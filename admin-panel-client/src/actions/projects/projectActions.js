import {
  PROJECT_RECEIVED,
  FETCH_PROJECTS,
  ERRORS,
  UNMOUNT_PROJECTS,
  CREATE_PROJECT
} from "../types/types";
import axios from "axios";

export const fetchProjects = userid => dispatch => {
  dispatch({ type: FETCH_PROJECTS });

  console.log(userid + "   ---");

  axios
    .post("/api/projects/getprojects", { userid: userid })
    .then(res => {
      const projects = res.data;
      dispatch({
        type: PROJECT_RECEIVED,
        payload: projects
      });
      dispatch({
        type: ERRORS,
        payload: ""
      });
    })
    .catch(
      err => console.log("Some error occured " + err)
      //   dispatch({
      //     type: ERRORS,
      //     payload: err.response.data
      //   })
    );

  console.log("weird");
};

export const createProject = (title, userid) => dispatch => {
  axios
    .post("/api/projects/createproject", { title: title, userid: userid })
    .then(res => {
      const projects = res.data;
      dispatch({
        type: CREATE_PROJECT,
        payload: projects
      });
      dispatch({
        type: ERRORS,
        payload: ""
      });
    })
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: err.response.data.project
      })
    );
};

export const unmountProjects = () => dispatch => {
  dispatch({ type: UNMOUNT_PROJECTS });
};
