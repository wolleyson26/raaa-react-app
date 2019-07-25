import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Contact = props => {
  return (
    <div className="uk-container-xsmall uk-align-center uk-padding">
      <h2>Contact Us</h2>
      <div>
        <form>
          <fieldset className="uk-fieldset">
            <legend>Please complete all required fields</legend>

            <div className="uk-margin">
              <input className="uk-input" type="text" placeholder="Full Name" />
            </div>
            <div className="uk-grid">
              <div className="uk-width-1-2@s">
                <input className="uk-input" type="email" placeholder="Email" />
              </div>
              <div className="uk-width-1-2@s">
                <input className="uk-input" type="phone" placeholder="Phone" />
              </div>
            </div>
            <div className="uk-margin">
              <input className="uk-input" type="text" placeholder="Subject" />
            </div>

            <div className="uk-margin">
              <select className="uk-select">
                <option value="" selected="selected">
                  Choose Category
                </option>
                <option value="questions">Genenral Questions</option>
                <option value="membership">Membership</option>
                <option value="information">Event Information</option>
                <option value="sponsorship">Sponsorship</option>
                <option value="volunteer">Volunteering to Help</option>
                <option value="feedback">Feeback / Suggestions</option>
                <option value="privacy">Privacy</option>
                <option value="site_problems">Website Problems</option>
              </select>
            </div>

            <div className="uk-margin">
              <textarea
                className="uk-textarea"
                rows="5"
                placeholder="Message"
              />
            </div>
          </fieldset>
          <div className="uk-text-center">
            <button className="uk-button uk-button-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
