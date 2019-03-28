import { ERRORS } from "../../actions/types/types";
const isEmpty = require("is-empty");

const initialState = {
  error: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ERRORS:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
