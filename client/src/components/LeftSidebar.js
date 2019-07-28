import React from "react";
import PropTypes from "prop-types";
import Signin from "./auth/Login";
import { connect } from "react-redux";
import Profile from "./auth/Profile.js";
import DonateCard from "./DonateCard";
import SocialIcons from "./MediaIcons";

const SectionTop = ({ auth: { isAuthenticated, loading } }) => {
  return (
    <div
      style={{ zIndex: "980", width: "auto" }}
      uk-sticky="offset: 50; bottom: true; #top; media: 640">
      {!loading && (
        <>{isAuthenticated ? <Profile /> : <Signin header="Sign In" />}</>
      )}

      <div className="uk-margin-large">
        <DonateCard />
      </div>
      <SocialIcons />
    </div>
  );
};

SectionTop.propTypes = {};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(SectionTop);
