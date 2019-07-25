import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EventCard from "../admin/components/EventCard";
import { getEvents } from "../actions/event";

const EventsSlide = ({ event: { events, loading }, getEvents }) => {
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <div className="uk-container-small uk-align-center">
      <h3>Upcomming Events</h3>
      <div uk-slider="center: true; autoplay: true">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabIndex="-1">
          <div className="uk-slider-items uk-child-width-1-2@s uk-grid uk-grid-match">
            {events
              .map((event, index) => {
                return (
                  <EventCard key={index} event={event} cardType="default" />
                );
              })
              .slice(0, 5)}
          </div>

          <a
            className="uk-position-center-left uk-position-small uk-hidden-hover"
            href="#"
            uk-slider-item="previous">
            <i className="fas fa-chevron-left fa-2x" />
          </a>
          <a
            className="uk-position-center-right uk-position-small uk-hidden-hover"
            href="#"
            uk-slider-item="next">
            <i className="fas fa-chevron-right fa-2x" />
          </a>
        </div>

        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
      </div>
    </div>
  );
};

EventsSlide.propTypes = {
  event: PropTypes.object.isRequired,
  getEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { getEvents }
)(EventsSlide);
