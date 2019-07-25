import React, { useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Redirect, Link } from "react-router-dom";
import { getProfileById } from "../actions/profile";
import PropTypes from "prop-types";
import LeftSidebar from "../components/LeftSidebar";

const MemberProfile = ({
  auth: { isAuthenticated, user, loading },
  profile: { profile },
  getProfileById,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return isAuthenticated && !loading ? (
    <>
      <div className="uk-container">
        <div className="uk-width-1-2 uk-align-center" />
        <div className="uk-grid">
          <div className="uk-width-1-4@s uk-margin uk-visible@s">
            {/* <LeftSidebar /> */}
          </div>
          <div className="uk-width-expand@s">
            <button className="uk-button" onClick={e => window.history.back()}>
              <span uk-icon="icon: chevron-double-left" /> Back
            </button>
            {profile && profile.user !== null ? (
              <div className="uk-card-default uk-padding">
                <h2>Member Card</h2>
                <div className="uk-grid">
                  <div className="uk-width-auto">
                    <img
                      style={{ marginTop: "50px" }}
                      src={`/${profile.user.avatar}`}
                      alt=""
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="uk-width-expand@s">
                    <ul uk-accordion="collapsible: false">
                      <li>
                        <a class="uk-accordion-title" />
                        <div class="uk-accordion-content">
                          <h3 className="uk-text-capitalize uk-margin-remove">
                            {`${profile.user.name.firstName} ${
                              profile.user.name.lastName
                            }`}
                          </h3>
                          <p className="uk-text-capitalize uk-margin-remove">
                            <strong>School: </strong>
                            {profile.education.school}
                          </p>
                          <p className="uk-margin-remove">
                            <strong>Graduated: </strong>
                            {moment(profile.education.to).format("YYYY ")}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />
                <p>
                  <strong>Bio: </strong>
                  {profile.bio}
                </p>
                <hr />
                {isAuthenticated && user.role === "admin" && (
                  <>
                    <p>
                      <strong>Job Title: </strong>
                      {profile.occupation.job} <br />
                      <strong>Company: </strong>
                      {profile.occupation.company} <br />
                      <strong>Location: </strong>
                      {profile.occupation.location}
                    </p>
                    <hr />
                    <p>
                      {" "}
                      <strong>Address: </strong>
                      {profile.contact.staddress}, {profile.contact.aptno}.
                      <br />
                      {profile.contact.city}, {profile.contact.state}{" "}
                      {profile.contact.zip}
                    </p>
                    <p>
                      <strong>Phone: </strong> {profile.contact.phone}
                      <br />
                    </p>
                    <hr />
                    <p>
                      <strong>Joined: </strong>
                      {moment(profile.created).format("LLL")}
                    </p>
                  </>
                )}

                {isAuthenticated &&
                  loading === false &&
                  (user._id === profile.user._id || user.role === "admin") && (
                    <Link
                      to={`/profile/edit/${match.params.id}`}
                      className="uk-button">
                      Edit Profile
                    </Link>
                  )}
              </div>
            ) : (
              <div className="uk-comment-primary">
                <h2>Member Card</h2>
                <h5>Profile does not exist </h5>
              </div>
            )}
          </div>
          <div className="uk-width-1-4@s" />
        </div>
      </div>
    </>
  ) : (
    <Redirect to="/login" />
  );
};

MemberProfile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.func.isRequired
};

const mapStateTopProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateTopProps,
  { getProfileById }
)(MemberProfile);
