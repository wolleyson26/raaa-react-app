import React from "react";
import PropTypes from "prop-types";
import MediaIcons from "../components/MediaIcons";
import Donate from "../components/DonateCard";

const hof = props => {
  return (
    <div className="uk-container uk-margin-top">
      <h1 className="uk-text-center">Hall of Fame</h1>
      <hr class="uk-divider-icon" />
      <div className="uk-grid">
        <div className="uk-width-1-4@s uk-margin uk-visible@s">
          <Donate />
          <MediaIcons />
        </div>
        <div className="uk-width-expand@s" />
      </div>
    </div>
  );
};

hof.propTypes = {};

export default hof;
