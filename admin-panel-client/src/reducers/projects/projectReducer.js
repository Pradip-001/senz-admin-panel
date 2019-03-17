import {
  PROJECT_RECEIVED,
  FETCH_PROJECTS,
  UNMOUNT_PROJECTS,
  CREATE_PROJECT
} from "../../actions/types/types";
const isEmpty = require("is-empty");

const initialState = {
  loading: true,
  projects: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROJECT_RECEIVED:
      return {
        ...state,
        projects: action.payload,
        loading: false
      };
    case FETCH_PROJECTS:
      return {
        ...state,
        loading: true
      };
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        loading: false
      };
    case UNMOUNT_PROJECTS:
      return {
        ...state,
        projects: [],
        loading: true
      };
    default:
      return state;
  }
}
