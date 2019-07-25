import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Iconnav from "../components/Iconnav";
import DashboardAccordion from "../components/DashboardAccordion";
import Post from "../components/Post";

const Dashboard = ({ auth: { isAuthenticated, user, loading } }) => {
  return isAuthenticated && user.role === "admin" ? (
    <div className="uk-container">
      <h2>Admin Dashboard</h2>
      <Iconnav />
      <DashboardAccordion />
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps)(Dashboard);
