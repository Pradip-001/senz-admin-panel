import { PROJECT_RECEIVED, FETCH_PROJECTS, ERRORS } from "../types/types";
import axios from "axios";

export const fetchProjects = userid => dispatch => {
  dispatch({ type: FETCH_PROJECTS });
  //   fetch("/api/projects/getprojects")
  //     .then(res => res.json())
  //     .then(posts => {
  //       dispatch({
  //         type: PROJECT_RECEIVED,
  //         payload: posts.docs
  //       });
  //     })
  //     .catch(err => {
  //       console.error("Server response invalid", err);
  //     });

  console.log(userid + "   ---");

  axios
    .post("/api/projects/getprojects", { userid: userid })
    .then(res => {
      const projects = res.data;

      console.log("this are projects" + projects[0].title);
      dispatch({
        type: PROJECT_RECEIVED,
        payload: projects
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
