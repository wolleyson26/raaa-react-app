import React from "react";
import PropTypes from "prop-types";
import Login from "../components/auth/Login";

const LoginUser = props => {
  return (
    <div
      className="uk-align-center uk-margin-large-top"
      style={{ width: "300px" }}>
      <h1 className="uk-text-center">Login</h1>
      <hr className="uk-divider-icon" />
      <Login />
    </div>
  );
};

Login.propTypes = {};

export default LoginUser;
