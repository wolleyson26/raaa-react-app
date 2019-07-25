import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getEvents } from "../../actions/event";
import PropTypes from "prop-types";
import IconNav from "../components/Iconnav";
import Alert from "../../components/Alert";
import EventCard from "../components/EventCard";

const ManageCalendar = ({ event: { events, loading }, getEvents }) => {
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="uk-container">
      <h2>Calendar</h2>

      <Link to="/admin" className="uk-button">
        <span uk-icon="icon: arrow-left" />
        Back to Dashboard
      </Link>
      <IconNav />

      <Link to="/calendar/new" className="uk-button uk-margin-large-top">
        Create a new event
      </Link>
      <Alert />
      <p>TIP: Click on event card to edit</p>
      <div className="uk-grid">
        <div className="uk-width-1-2@s uk-padding">
          <h4>Upcoming</h4>

          <div
            className="uk-grid-small uk-grid-match"
            style={{ width: "370px" }}>
            {events &&
              events
                .filter(event => event.date >= new Date().toISOString())
                .map((event, index) => {
                  return (
                    <EventCard key={index} event={event} cardType="primary" />
                  );
                })}
          </div>
        </div>
        <div className="uk-width-1-2@s uk-padding" />
      </div>
      <div>
        <h3>Recently completed Events</h3>
        <div uk-slider="center: false;">
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex="-1">
            <div className="uk-slider-items uk-child-width-1-4 uk-grid">
              {events &&
                events
                  .filter(event => event.date <= new Date().toISOString())
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((event, index) => {
                    return (
                      <EventCard key={index} event={event} cardType="default" />
                    );
                  })}
            </div>

            <a
              className="uk-position-center-left uk-position-small uk-hidden-hover"
              href="#"
              uk-slider-item="previous"
            />
            <a
              className="uk-position-center-right uk-position-small "
              href="#"
              uk-slider-item="next">
              <i
                className="fas fa-chevron-right fa-2x"
                style={{ color: "black" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ManageCalendar.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { getEvents }
)(ManageCalendar);
