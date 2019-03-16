import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";

function Device({ data }) {
  return <h1>{data.devicename}</h1>;
}

export default Device;
