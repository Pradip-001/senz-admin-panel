import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
// import errorReducer from './errorReducers'
import projectReducer from "./projects/projectReducer";

export default combineReducers({
  auth: authReducer,
  projects: projectReducer
});
