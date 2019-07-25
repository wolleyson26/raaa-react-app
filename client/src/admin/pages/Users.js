import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { getProfiles } from "../../actions/profile";
import SearchForm from "../../components/SearchForm";
import IconNav from "../components/Iconnav";
import Spinner from "../../components/Spinner";

const Users = ({ profile: { profiles, loading }, getProfiles }) => {
  useEffect(() => {
    getProfiles();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className="uk-container">
      <h2>Members</h2>

      <Link to="/admin" className="uk-button">
        <span uk-icon="icon: arrow-left" />
        Back to Dashboard
      </Link>
      <IconNav />

      <div className="uk-width-1-2@s uk-align-center">
        <SearchForm placeholder="Search members..." />
      </div>

      <div className="uk-overflow-auto">
        <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
          <thead>
            <tr>
              <th className="uk-table-shrink" />
              <th className="uk-table-shrink">Avatar</th>
              <th className="uk-table-expand">Name</th>
              <th className="uk-width-small">Phone</th>
              <th className="uk-table-shrink uk-text-nowrap">State</th>
              <th className="uk-table-shrink uk-text-nowrap">Member Since</th>
              <th className="uk-table-shrink uk-text-nowrap">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {profiles &&
              profiles.map((profile, index) => (
                <tr key={index}>
                  <td>
                    <input className="uk-checkbox" type="checkbox" />
                  </td>
                  <td>
                    <img
                      className="uk-preserve-width uk-border-circle"
                      src={profile.user && `/${profile.user.avatar}`}
                      width="40"
                      alt=""
                    />
                  </td>
                  <td className="uk-table-link">
                    <Link
                      to={profile.user && `/user/${profile.user._id}`}
                      className="uk-link-reset uk-text-capitalize"
                      href="">
                      {profile.user &&
                        `${profile.user.name.firstName}  
                        ${profile.user.name.lastName}`}
                    </Link>
                  </td>
                  <td className="uk-text-truncate">{profile.contact.phone}</td>
                  <td className="uk-text-nowrap">{profile.contact.state}</td>
                  <td className="uk-text-nowrap">
                    {moment(profile.created).format("ll")}
                  </td>
                  <td className="uk-text-nowrap">
                    {moment(profile.dateupdated).format("ll")}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Users.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Users);
