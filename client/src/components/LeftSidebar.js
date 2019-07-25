import React from "react";
import PropTypes from "prop-types";
import Signin from "./auth/Login";
import { connect } from "react-redux";
import Profile from "./auth/Profile.js";
import Featured from "./Featured";

const SectionTop = ({ auth: { isAuthenticated, loading } }) => {
  return (
    <div
      style={{ zIndex: "980", width: "auto" }}
      uk-sticky="offset: 50; bottom: true; #top; media: 640">
      {!loading && (
        <>{isAuthenticated ? <Profile /> : <Signin header="Sign In" />}</>
      )}
      <div className="uk-margin-medium-top uk-text-center">
        <h4>Give Back Today!</h4>
        <button className="uk-button uk-button-primary">Donate </button>
      </div>
      <div className="uk-margin-medium-top uk-text-center">
        <h5>Connect with us on Social Media</h5>
        <a
          href="https://facebook.com"
          className="uk-icon-button uk-margin-small-right"
          uk-icon="facebook"
        />
        <a
          href="https://instagram.com"
          className="uk-icon-button  uk-margin-small-right"
          uk-icon="instagram"
        />
        <a
          href="https://twitter.com"
          className="uk-icon-button"
          uk-icon="twitter"
        />
      </div>
    </div>
  );
};

SectionTop.propTypes = {};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(SectionTop);
