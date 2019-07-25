import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Iconnav = props => {
  return (
    <ul className="uk-iconnav">
      <li>
        <Link to="/post" uk-icon="icon: plus" uk-tooltip="Add Post" />
      </li>
      <li>
        <Link to="/posts" uk-icon="icon: copy" uk-tooltip="List of Posts" />
      </li>
      <li>
        <Link to="/users" uk-icon="icon: users" uk-tooltip="Manage members" />
      </li>
      <li>
        <Link
          to="/calendar"
          uk-icon="icon: calendar"
          uk-tooltip="Manage Calendar"
        />
      </li>
      <li>
        <Link to="/mail" uk-icon="icon: mail" uk-tooltip="Manage Mail" />
      </li>
      <li>
        <Link
          to="/manageimages"
          uk-icon="icon: image"
          uk-tooltip="Manage Images"
        />
      </li>
      <li>
        <Link to="/trash" uk-icon="icon: trash" uk-tooltip="Deleted Posts" />
      </li>
    </ul>
  );
};

Iconnav.propTypes = {};

export default Iconnav;
