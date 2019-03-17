import {
  DEVICES_RECEIVED,
  FETCH_DEVICES,
  ERRORS,
  UNMOUNT_DEVICES,
  CREATE_DEVICE
} from "../types/types";
import axios from "axios";

export const fetchDevices = (projectid, userid) => dispatch => {
  dispatch({ type: FETCH_DEVICES });

  console.log(projectid + "   ---  " + userid + "  -------");

  axios
    .post("/api/devices/getdevices", { userid: userid, projectid: projectid })
    .then(res => {
      const devices = res.data;

      // console.log("this are devices" + devices[0].devicename);
      dispatch({
        type: DEVICES_RECEIVED,
        payload: devices
      });
      //window.location = "/devices";
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

export const createDevice = (devicename, projectid, userid) => dispatch => {
  axios
    .post("/api/devices/createdevice", { devicename, projectid, userid })
    .then(res => {
      const device = res.data;
      dispatch({
        type: CREATE_DEVICE,
        payload: device
      });
    })
    .catch(
      err => console.log("Some error occured " + err)
      //   dispatch({
      //     type: ERRORS,
      //     payload: err.response.data
      //   })
    );
};

export const unmountDevices = () => dispatch => {
  dispatch({ type: UNMOUNT_DEVICES });
};
