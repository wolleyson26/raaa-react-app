import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import renderField from "./renderField";
import validate from "./validate";
import Alert from "../Alert";

class RegisterWizardFirstPage extends Component {
  continue = values => {
    this.props.createNewUser(values);
  };

  render() {
    return (
      <div className="uk-container-xsmall uk-align-center">
        <h3>Setup Login Credentials</h3>
        <p>Fields marked * are required</p>
        <Alert />
        <form
          onSubmit={this.props.handleSubmit(values => this.continue(values))}
          className="uk-grid uk-margin-top">
          <div className="uk-width-1-2@s uk-margin-bottom">
            <Field
              type="text"
              name="firstName"
              label="First Name*"
              placeholder="Enter your first name"
              className="uk-input"
              component={renderField}
            />
          </div>
          <div className="uk-width-1-2@s uk-margin-bottom">
            <Field
              type="text"
              name="lastName"
              label="Last Name*"
              placeholder="Enter your last name"
              className="uk-input"
              component={renderField}
            />
          </div>
          <div className="uk-width-1-1@s uk-margin-bottom">
            <Field
              type="email"
              name="email"
              label="Email*"
              placeholder="example@email.com"
              className="uk-input"
              component={renderField}
            />
          </div>
          <div className="uk-width-1-2@s uk-margin-bottom">
            <Field
              type="password"
              name="password"
              label="Password*"
              placeholder="Create a unique password"
              className="uk-input"
              component={renderField}
            />
          </div>
          <div className="uk-width-1-2@s uk-margin-bottom">
            <Field
              type="password"
              name="password2"
              label="Re-enter Password*"
              placeholder="Comfirm password"
              className="uk-input"
              component={renderField}
            />
          </div>
          <div className="uk-width-1-1">
            Already have an account? <Link to="/login">Sign In</Link>
          </div>
          <button
            type="submit"
            className="uk-button uk-button-primary uk-margin-top uk-align-center">
            Continue
          </button>
        </form>
      </div>
    );
  }
}

RegisterWizardFirstPage.propTypes = {};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: true,
  validate
})(RegisterWizardFirstPage);
