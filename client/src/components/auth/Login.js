import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import Alert from "../Alert";

const Signin = ({ login, header, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const onSubmit = async e => {
    e.preventDefault();

    login(email, password);
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { email, password } = formData;

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h4>{header}</h4>
      <div className="uk-alert-danger uk-margin-bottom">
        <Alert />
      </div>
      <form onSubmit={e => onSubmit(e)}>
        <div className="uk-margin">
          <div className="uk-inline uk-width-expand@s">
            <span className="uk-form-icon" uk-icon="icon: user" />
            <input
              className="uk-input"
              type="email"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              placeholder="email or username"
            />
          </div>
        </div>

        <div className="uk-margin">
          <div className="uk-inline uk-width-expand@s">
            <span
              className="uk-form-icon uk-form-icon-flip"
              uk-icon="icon: lock"
            />
            <input
              className="uk-input"
              type="password"
              name="password"
              minLength="6"
              value={password}
              onChange={e => onChange(e)}
              placeholder="enter password"
            />
          </div>
        </div>
        <div className="uk-margin uk-width-expand@s">
          <button className="uk-button uk-button-default uk-width-1-1 uk-text-bold">
            Sign In
          </button>
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

Signin.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Signin);
