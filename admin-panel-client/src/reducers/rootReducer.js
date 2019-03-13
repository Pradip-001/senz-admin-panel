import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
// import errorReducer from './errorReducers'
// import postReducer from '../pages/main/reducers/postReducers'

export default combineReducers({
  auth: authReducer
});
