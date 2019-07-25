import React from "react";
import PropTypes from "prop-types";

const EditEvent = props => {
  return <div>{props.match.params.id}</div>;
};

EditEvent.propTypes = {};

export default EditEvent;
