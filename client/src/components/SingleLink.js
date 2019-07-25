import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SingleLink = ({ text, link }) => {
  return (
    <li>
      <Link
        to={link}
        className="uk-button uk-button-text uk-margin-small-left"
        href="#">
        {text}
      </Link>
    </li>
  );
};

SingleLink.propTypes = {};

export default SingleLink;
