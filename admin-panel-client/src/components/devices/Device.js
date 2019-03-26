import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";

function Device({ data }) {
  return (
    <div class="custom-card">
      <div classes="cardtitle">{data.devicename}</div>
    </div>
  );
}

export default Device;
