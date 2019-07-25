import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";

import renderField from "./renderField";
import validate from "./validate";
import countries from "./countries";
import states from "./states";

class RegisterWizardThirdPage extends Component {
  renderCountrySelector = ({ input, meta: { touched, error } }) => (
    <div>
      <select {...input} className="uk-select">
        <option value="">Select a Country...</option>
        <option value="United States">United States</option>
        {countries.map(({ name }) => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </select>
      <div className="uk-form-danger">
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );

  renderStateSelector = ({ input, meta: { touched, error } }) => (
    <div>
      <select {...input} className="uk-select">
        <option value="">Select a State...</option>
        {states.map(({ name }) => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </select>
      <div className="uk-form-danger">
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );

  render() {
    return (
      <div className="uk-container-xsmall uk-align-center">
        <h3>Contact Information</h3>
        <p>Fields marked * are required</p>
        <form
          onSubmit={this.props.handleSubmit(values =>
            this.props.createNewProfile(values)
          )}
          className="uk-grid">
          <div class="uk-width-1-2@s uk-margin-bottom">
            <Field
              type="text"
              name="staddress"
              label="Street Address*"
              placeholder="Enter Street Address"
              className="uk-input"
              component={renderField}
            />
          </div>
          <div class="uk-width-1-2@s uk-margin-bottom">
            <Field
              type="text"
              name="aptno"
              label="Address Line 2 (Optional)"
              placeholder="Apt No."
              className="uk-input"
              component={renderField}
            />
          </div>
          <div class="uk-width-1-3@s uk-margin-bottom">
            <Field
              type="text"
              name="city"
              label="City*"
              placeholder="Eg. New York"
              className="uk-input"
              component={renderField}
            />
          </div>
          <div class="uk-width-1-3@s uk-margin-bottom">
            <label>State*</label>
            <Field
              name="state"
              placeholder="Select State"
              className="uk-input"
              component={this.renderStateSelector}
            />
          </div>
          <div class="uk-width-1-3@s uk-margin-bottom">
            <Field
              type="zip"
              name="zip"
              label="Enter Zip Code"
              placeholder="Enter Zip Code"
              className="uk-input"
              component={renderField}
            />
          </div>
          <div class="uk-width-1-2@s uk-margin-bottom">
            <label>Country*</label>
            <Field
              name="country"
              placeholder="Select Country"
              className="uk-input"
              component={this.renderCountrySelector}
            />
          </div>
          <div class="uk-width-1-2@s uk-margin-bottom">
            <Field
              type="phone"
              name="phone"
              label="Phone Number*"
              placeholder="Eg. 555 555 5555"
              className="uk-input"
              component={renderField}
            />
          </div>
          <div className="uk-flex uk-width-1-1">
            <div className="uk-width-1-2">
              <button
                type="button"
                className="uk-button uk-button-default uk-margin-top"
                onClick={this.props.previousPage}>
                Previous
              </button>
            </div>
            <div className="uk-width-1-2">
              <button
                type="submit"
                className="uk-button uk-button-primary uk-margin-top uk-align-right">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

RegisterWizardThirdPage.propTypes = {};

export default reduxForm({
  form: "wizard",
  validate,
  forceUnregisterOnUnmount: true,
  destroyOnUnmount: false
})(RegisterWizardThirdPage);
