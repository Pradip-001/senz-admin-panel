import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import DeviceList from "./DeviceList";
import {
  fetchDevices,
  unmountDevices
} from "../../actions/devices/deviceActions";
class Devices extends Component {
  state = {};

  loadDevices() {
    if (this.props.loading) {
      console.log(
        this.props.match.params.projectid +
          " parmas " +
          this.props.match.params.userid
      );
      this.props.fetchDevices(
        this.props.match.params.projectid,
        this.props.match.params.userid
      );
    }
  }

  componentWillUnmount() {
    this.props.unmountDevices();
  }

  render() {
    const { loading, devices } = this.props;
    this.loadDevices();
    if (loading) {
      return <h1>Devices loading...</h1>;
    } else if (loading == false && devices.length == 0) {
      return <h1>No Devices found</h1>;
    } else {
      return <DeviceList />;
    }
  }
}

const mapStateToProps = state => ({
  user: state.auth,
  devices: state.devices.devices,
  loading: state.devices.loading
});
export default compose(
  connect(
    mapStateToProps,
    { fetchDevices, unmountDevices }
  )
)(Devices);

// export default ProjectList;
