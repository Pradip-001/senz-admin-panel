import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import deviceReducer from "./devices/deviceReducer";
import projectReducer from "./projects/projectReducer";

export default combineReducers({
  auth: authReducer,
  projects: projectReducer,
  devices: deviceReducer
});
