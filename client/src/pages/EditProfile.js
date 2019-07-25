import React, { useEffect, useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getProfileById, updateProfile } from "../actions/profile";
import PropTypes from "prop-types";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";
import countries from "../components/auth/countries";
import states from "../components/auth/states";

const EditProfile = ({
  profile: { profile, loading },
  getProfileById,
  updateProfile,
  history,
  auth: { isAuthenticated },
  match
}) => {
  const [formData, setFormData] = useState({
    bio: "",
    school: "",
    degree: "",
    from: "",
    to: "",
    current: false,
    gender: "",
    birthDate: "",
    job: "",
    company: "",
    location: "",
    staddress: "",
    aptno: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: ""
  });

  useEffect(() => {
    getProfileById(match.params.id);

    setFormData({
      bio: !profile || loading || !profile.bio ? "" : profile.bio,
      school:
        !profile || loading || !profile.education || !profile.education.school
          ? ""
          : profile.education.school,
      degree:
        !profile || loading || !profile.education || !profile.education.degree
          ? ""
          : profile.education.degree,
      from:
        !profile || loading || !profile.education || !profile.education.from
          ? ""
          : profile.education.from,
      to:
        !profile || loading || !profile.education || !profile.education.to
          ? ""
          : profile.education.to,
      job:
        !profile || loading || !profile.occupation || !profile.occupation.job
          ? ""
          : profile.occupation.job,
      company:
        !profile ||
        loading ||
        !profile.occupation ||
        !profile.occupation.company
          ? ""
          : profile.occupation.company,
      location:
        !profile ||
        loading ||
        !profile.occupation ||
        !profile.occupation.location
          ? ""
          : profile.occupation.location,
      staddress:
        !profile || loading || !profile.contact || !profile.contact.staddress
          ? ""
          : profile.contact.staddress,
      aptno:
        !profile || loading || !profile.contact || !profile.contact.aptno
          ? ""
          : profile.contact.aptno,
      city:
        !profile || loading || !profile.contact || !profile.contact.city
          ? ""
          : profile.contact.city,
      state:
        !profile || loading || !profile.contact || !profile.contact.state
          ? ""
          : profile.contact.state,
      zip:
        !profile || loading || !profile.contact || !profile.contact.zip
          ? ""
          : profile.contact.zip,
      country:
        !profile || loading || !profile.contact || !profile.contact.country
          ? ""
          : profile.contact.country,
      phone:
        !profile || loading || !profile.contact || !profile.contact.phone
          ? ""
          : profile.contact.phone,
      gender: !profile || loading || !profile.gender ? "" : profile.gender,
      birthDate:
        !profile || loading || !profile.birthDate ? "" : profile.birthDate
    });
  }, [loading]);

  const handleSubmit = e => {
    e.preventDefault();

    updateProfile(formData, match.params.id, history);
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const {
    bio,
    school,
    degree,
    from,
    to,
    job,
    company,
    location,
    staddress,
    aptno,
    city,
    state,
    zip,
    country,
    phone
  } = formData;

  return isAuthenticated ? (
    loading ? (
      <Spinner />
    ) : (
      <div className="uk-container-small uk-align-center uk-padding">
        <h2>Edit Profile</h2>

        <form onSubmit={e => handleSubmit(e)}>
          <label>Bio: </label>
          <textarea
            name="bio"
            value={bio}
            onChange={e => onChange(e)}
            placeholder="Tell us a litle bit about yourself"
            className="uk-textarea  uk-margin-large-bottom"
          />

          <div className="uk-grid">
            <div class="uk-width-1-4@s  uk-margin-bottom">
              <label>School: </label>
              <input
                type="text"
                name="school"
                className="uk-input"
                value={school}
                onChange={e => onChange(e)}
              />
            </div>
            <div class="uk-width-1-4@s  uk-margin-bottom">
              <label>Degree: </label>
              <input
                type="text"
                name="degree"
                className="uk-input"
                value={degree}
                onChange={e => onChange(e)}
              />
            </div>
            <div class="uk-width-1-4@s  uk-margin-bottom">
              <label>From: </label>
              <input
                type="date"
                name="from"
                className="uk-input"
                value={from.substring(0, 10)}
                onChange={e => onChange(e)}
              />
            </div>
            <div class="uk-width-1-4@s  uk-margin-bottom">
              <label>To: </label>
              <input
                type="date"
                name="to"
                label="To"
                className="uk-input"
                value={to.substring(0, 10)}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <div className="uk-grid uk-margin-remove-top">
            <div class="uk-width-1-3@s  uk-margin-bottom">
              <label>Current Occupation: </label>
              <input
                type="text"
                name="job"
                className="uk-input"
                value={job}
                onChange={e => onChange(e)}
              />
            </div>
            <div class="uk-width-1-3@s  uk-margin-bottom">
              <label>Company:</label>
              <input
                type="text"
                name="company"
                className="uk-input"
                value={company}
                onChange={e => onChange(e)}
              />
            </div>
            <div class="uk-width-1-3@s  uk-margin-bottom">
              <label>Location:</label>
              <input
                type="text"
                name="location"
                className="uk-input"
                value={location}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <div className="uk-grid">
            <div class="uk-width-1-2@s uk-margin-bottom">
              <label>Address:</label>
              <input
                type="text"
                name="staddress"
                placeholder="Enter Street Address"
                className="uk-input"
                value={staddress}
                onChange={e => onChange(e)}
              />
            </div>
            <div class="uk-width-1-2@s uk-margin-bottom">
              <label>Apt No:</label>
              <input
                type="text"
                name="aptno"
                placeholder="Apt No."
                className="uk-input"
                value={aptno}
                onChange={e => onChange(e)}
              />
            </div>
            <div class="uk-width-1-3@s uk-margin-bottom">
              <label>City:</label>
              <input
                type="text"
                name="city"
                placeholder="Eg. New York"
                className="uk-input"
                value={city}
                onChange={e => onChange(e)}
              />
            </div>
            <div class="uk-width-1-3@s uk-margin-bottom">
              <label>State:</label>
              <select
                name="state"
                value={state}
                onChange={e => onChange(e)}
                className="uk-select">
                <option value="">Select state...</option>
                {states.map(({ name }) => (
                  <option value={name} key={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div class="uk-width-1-3@s uk-margin-bottom">
              <label>Zip:</label>
              <input
                type="zip"
                name="zip"
                placeholder="Enter Zip Code"
                className="uk-input"
                value={zip}
                onChange={e => onChange(e)}
              />
            </div>
            <div class="uk-width-1-2@s uk-margin-bottom">
              <label>Country:</label>
              <select
                name="country"
                value={country}
                onChange={e => onChange(e)}
                className="uk-select">
                <option value="">Select Country...</option>
                {countries.map(({ name }) => (
                  <option value={name} key={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div class="uk-width-1-2@s uk-margin-bottom">
              <label>Phone:</label>
              <input
                type="phone"
                name="phone"
                placeholder="Eg. 555 555 5555"
                className="uk-input"
                value={phone}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <Alert />
          <button className="uk-button uk-button-primary uk-margin-top">
            Update
          </button>
          <Link
            className="uk-button uk-button-default uk-float-right uk-margin-top"
            onClick={e => window.history.back()}>
            Go Back
          </Link>
        </form>
      </div>
    )
  ) : (
    <Redirect to="/login" />
  );
};

EditProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  profile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileById, updateProfile }
)(withRouter(EditProfile));
