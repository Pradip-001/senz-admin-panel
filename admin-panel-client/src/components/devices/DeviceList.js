import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import Device from "./Device";
// import { fetchDevices } from "../../actions/devices/deviceActions";

class DeviceList extends Component {
  state = {};
  render() {
    const { loading, devices } = this.props;

    var currentdevices = [];
    for (var i = 0; i < devices.length; i++) {
      currentdevices.push(
        <div key={i}>
          <Device key={i} data={devices[i]} />
        </div>
      );
    }
    return currentdevices;
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
    {}
  )
)(DeviceList);

// export default ProjectList;
