import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import deviceReducer from "./devices/deviceReducer";
import projectReducer from "./projects/projectReducer";
import errorReducer from "./error/errorReducer";
export default combineReducers({
  auth: authReducer,
  projects: projectReducer,
  devices: deviceReducer,
  errors: errorReducer
});
