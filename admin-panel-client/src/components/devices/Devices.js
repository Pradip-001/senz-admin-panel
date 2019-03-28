import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import DeviceList from "./DeviceList";
import Button from "@material-ui/core/Button";

import {
  fetchDevices,
  unmountDevices,
  createDevice
} from "../../actions/devices/deviceActions";
class Devices extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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

  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createDevice(
      this.state.value,
      this.props.match.params.projectid,
      this.props.match.params.userid
    );
    this.state.value = "";
  }
  render() {
    const { loading, devices, user, errors } = this.props;

    this.loadDevices();
    if (!user.authenticated) {
      return <h1>Please login to view your devices...</h1>;
    } else {
      if (loading) {
        return (
          <div class="card-container">
            <h1>Devices loading...</h1>{" "}
            <form onSubmit={this.handleSubmit} class="custom-card">
              <label>
                New Device:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <label class="error-class">{this.props.errors.error}</label>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        );
      } else if (loading == false && devices.length == 0) {
        return (
          <div class="card-container">
            <h1>No Devices found</h1>{" "}
            <form onSubmit={this.handleSubmit} class="custom-card">
              <label>
                New Device:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <label class="error-class">{this.props.errors.error}</label>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        );
      } else {
        return (
          <div class="card-container">
            <DeviceList />
            <form onSubmit={this.handleSubmit} class="custom-card">
              <label>
                New Device:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <label class="error-class">{this.props.errors.error}</label>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = state => ({
  user: state.auth,
  devices: state.devices.devices,
  loading: state.devices.loading,
  errors: state.errors
});
export default compose(
  connect(
    mapStateToProps,
    { fetchDevices, unmountDevices, createDevice }
  )
)(Devices);

// export default ProjectList;
