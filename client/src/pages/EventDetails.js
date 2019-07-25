import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { getEventById } from "../actions/event";
import PropTypes from "prop-types";
import Spinner from "../components/Spinner";

const EventDetails = ({ event: { event, loading }, getEventById, match }) => {
  useState(() => {
    getEventById(match.params.id);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className="uk-container">
      <div className="uk-grid">
        <div className="uk-width-expand@s">
          <h3>Event Details</h3>

          <h4>{event.title}</h4>

          <p>
            <strong>Date: </strong> {moment(event.date).format("LL")}
          </p>
          <p>
            <strong>Time: </strong> {moment(event.date).format("LT")}
          </p>
          <p>
            <strong>Location: </strong> {event.location}
          </p>
          <p>
            <strong>Details: </strong>
            {event.body}
          </p>
          <p>
            <strong>Direction: </strong>
          </p>
          {event.location && (
            <div class="gmap_canvas">
              <iframe
                width="100%"
                height="500"
                id="gmap_canvas"
                src={`https://www.google.com/maps/embed/v1/search?q=${
                  event.location
                }&key=AIzaSyDDHjXyK5KNY95I2nmq-wBtIjkNm96E27A`}
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              />
            </div>
          )}
          <button
            onClick={e => window.history.back()}
            class="uk-button uk-button-default uk-margin-top">
            Back
          </button>
        </div>
        <div className="uk-width-1-4@s" />
      </div>
    </div>
  );
};

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};

EventDetails.propTypes = {
  event: PropTypes.object.isRequired,
  getEventById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { getEventById }
)(EventDetails);
