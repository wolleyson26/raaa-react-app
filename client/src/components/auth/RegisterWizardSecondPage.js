import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import renderField from "./renderField";
import validate from "./validate";

class RegisterWizardSecondPage extends Component {
  renderError = ({ meta: { touched, error } }) => {
    return touched && error ? <span> {error}</span> : false;
  };

  continue = () => {
    this.props.nextPage();
  };

  render() {
    return (
      <div className="uk-container-xsmall uk-align-center">
        <h3>Setup Your Profile</h3>
        <p>Fields marked * are required</p>
        <form
          onSubmit={this.props.handleSubmit}
          className="uk-form"
          className="uk-grid">
          <div class="uk-width-1-2@s uk-margin-bottom">
            <div>
              <label>Gender*</label>
              <div>
                <label>
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="male"
                  />{" "}
                  Male
                </label>
                {`  `}
                <label>
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="female"
                  />{" "}
                  Female
                </label>
                <div className="uk-form-danger">
                  <Field name="gender" component={this.renderError} />
                </div>
              </div>
            </div>
          </div>
          <div class="uk-width-1-3@s uk-margin-bottom">
            <label>Birth Date*</label>
            <Field
              type="date"
              name="birthDate"
              label="Birth Date*"
              className="uk-input"
              component="input"
            />
            <div className="uk-form-danger">
              <Field name="birthDate" component={this.renderError} />
            </div>
          </div>
          <div class="uk-width-1-1@s uk-margin-bottom">
            <label>Bio</label>
            <Field
              name="bio"
              placeholder="Tell us a litle bit about yourself"
              className="uk-textarea"
              component="textarea"
            />
          </div>

          <div class="uk-width-1-4@s uk-margin-bottom">
            <Field
              type="text"
              name="school"
              label="College*"
              className="uk-input"
              component={renderField}
            />
          </div>
          <div class="uk-width-1-4@s uk-margin-bottom">
            <Field
              type="text"
              name="degree"
              label="Degree*"
              className="uk-input"
              component={renderField}
            />
          </div>
          <div class="uk-width-1-4@s uk-margin-bottom">
            <label>From*</label>
            <Field
              type="date"
              name="from"
              label="From*"
              className="uk-input"
              component="input"
            />
            <div className="uk-form-danger">
              <Field name="from" component={this.renderError} />
            </div>
          </div>
          <div class="uk-width-1-4@s uk-margin-bottom">
            <Field
              type="date"
              name="to"
              label="To"
              className="uk-input"
              component={renderField}
            />
          </div>
          <div class="uk-width-1-3@s uk-margin-bottom">
            <Field
              type="text"
              name="job"
              label="Current Job*"
              className="uk-input"
              component={renderField}
            />
          </div>
          <div class="uk-width-1-3@s uk-margin-bottom">
            <Field
              type="text"
              name="company"
              label="Company*"
              className="uk-input"
              component={renderField}
            />
          </div>
          <div class="uk-width-1-3@s uk-margin-bottom">
            <Field
              type="text"
              name="location"
              label="Location"
              className="uk-input"
              component={renderField}
            />
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

RegisterWizardSecondPage.propTypes = {};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  validate: validate
})(RegisterWizardSecondPage);
