import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

function Project({ project, user }) {
  return (
    // <Button
    //   component={Link}
    //   color="primary"
    //   to={"/devices/" + project._id + "/" + user.user.id}
    // >
    //   {project.title}
    // </Button>
    <div class="custom-card">
      <div classes="cardtitle">{project.title}</div>
      <Link to={"/devices/" + project._id + "/" + user.user.id}>
        view devices
      </Link>
    </div>
  );
}

export default Project;
