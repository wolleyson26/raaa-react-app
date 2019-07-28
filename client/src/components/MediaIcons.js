import React from "react";
import PropTypes from "prop-types";

const MediaIcons = props => {
  return (
    <div className="uk-margin-medium-top uk-text-center">
      <h3>Connect with us on Social Media</h3>
      <a
        href="https://facebook.com"
        style={{ background: "#1e87f0", color: "#fff" }}
        className="uk-icon-button uk-margin-small-right"
        uk-icon="facebook"
      />
      <a
        href="https://instagram.com"
        style={{
          background:
            "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
          color: "#fff"
        }}
        className="uk-icon-button  uk-margin-small-right"
        uk-icon="instagram"
      />
      <a
        href="https://twitter.com"
        style={{ background: "#00d4ff", color: "#fff" }}
        className="uk-icon-button"
        uk-icon="twitter"
      />
    </div>
  );
};

MediaIcons.propTypes = {};

export default MediaIcons;
