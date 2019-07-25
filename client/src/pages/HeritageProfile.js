import React from "react";
import PropTypes from "prop-types";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import SectionMiddleProfiles from "../components/SectionMiddleProfiles";

const HeritageProfile = props => {
  return (
    <>
      <h1 className="uk-text-center">Heritage Profiles</h1>

      <div className="uk-container">
        <div className="uk-width-1-2 uk-align-center" />
        <div className="uk-grid">
          <div className="uk-width-1-4@s uk-margin uk-visible@s">
            <LeftSidebar />
          </div>
          <div className="uk-width-expand@s">
            <SectionMiddleProfiles />
          </div>
          <div className="uk-width-1-4@s">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

HeritageProfile.propTypes = {};

export default HeritageProfile;
