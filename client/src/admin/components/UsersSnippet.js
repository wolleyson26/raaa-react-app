import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";
import { getProfiles } from "../../actions/profile";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner";

const UsersSnippet = ({ profile: { profiles, loading }, getProfiles }) => {
  useEffect(() => {
    getProfiles();
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <div className="uk-overflow-auto">
        <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
          <thead>
            <tr>
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
              profiles.slice(0, 5).map((profile, index) => (
                <tr key={index}>
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

UsersSnippet.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(UsersSnippet);
