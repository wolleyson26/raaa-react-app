import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { getCurrentProfile } from "../../actions/profile";
import PropTypes from "prop-types";
import Spinner from "../Spinner";

const Profile = ({
  logout,
  getCurrentProfile,
  auth: { isAuthenticated, user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && user === null ? (
    <Spinner />
  ) : (
    <div className="uk-card uk-card-default uk-width-expand@s">
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle">
          <div className="uk-width-auto">
            <img
              src={user.avatar}
              className="uk-border-circle"
              width="40"
              height="40"
            />
          </div>
          <div className="uk-width-expand">
            <h5 className="uk-card-title uk-margin-remove-bottom uk-text-capitalize">
              Welcome {user.name && user.name.firstName}
            </h5>
            <p className="uk-text-meta uk-margin-remove-top">
              <time dateTime="2016-04-01T19:00">
                {new Date().toDateString()}
              </time>
            </p>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <Link
          to="/gallery/submit"
          className="uk-button uk-button-text uk-margin-small-bottom uk-text-left"
          uk-tooltip="You may submit photos to be featured on the photo Gallery">
          Submit Photos
        </Link>
        <Link
          to={`/profile/edit/${user._id}`}
          className="uk-button uk-button-text uk-margin-small-bottom uk-text-left"
          uk-tooltip="You may update your profile info">
          Edit Profile
        </Link>
        {isAuthenticated && user.role === "admin" ? (
          <Link
            to="/admin"
            className="uk-button uk-button-text uk-margin-small-bottom uk-text-left">
            Admin Dashboard
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="uk-card-footer">
        <Link to="/" className="uk-button uk-button-text" onClick={logout}>
          Logout
        </Link>
      </div>
    </div>
  );
};

Profile.propTypes = {
  logout: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { logout, getCurrentProfile }
)(Profile);
