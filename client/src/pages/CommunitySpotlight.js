import React from "react";
import PropTypes from "prop-types";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import SectionMiddleSpotlights from "../components/SectionMiddleSpotlights";

const CommunitySpotlight = props => {
  return (
    <>
      <h1 className="uk-text-center">Community Spotlight</h1>

      <div className="uk-container">
        <div className="uk-width-1-2 uk-align-center" />
        <div className="uk-grid">
          <div className="uk-width-1-4@s uk-margin uk-visible@s">
            <LeftSidebar />
          </div>
          <div className="uk-width-expand@s">
            <SectionMiddleSpotlights />
          </div>
          <div className="uk-width-1-4@s">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

CommunitySpotlight.propTypes = {};

export default CommunitySpotlight;
