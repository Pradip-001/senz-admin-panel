import {
  DEVICES_RECEIVED,
  FETCH_DEVICES,
  UNMOUNT_DEVICES,
  CREATE_DEVICE
} from "../../actions/types/types";
const isEmpty = require("is-empty");

const initialState = {
  loading: true,
  devices: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DEVICES_RECEIVED:
      return {
        ...state,
        devices: action.payload,
        loading: false
      };
    case FETCH_DEVICES:
      return {
        ...state,
        loading: true
      };
    case CREATE_DEVICE:
      return {
        ...state,
        devices: [...state.devices, action.payload],
        loading: false
      };
    case UNMOUNT_DEVICES:
      return {
        ...state,
        devices: [],
        loading: true
      };
    default:
      return state;
  }
}
