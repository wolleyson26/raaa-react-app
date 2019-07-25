import React, { useEffect } from "react";
import PropTypes from "prop-types";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import { connect } from "react-redux";
import EventCard from "../admin/components/EventCard";
import { getEvents } from "../actions/event";

const EventsPage = ({ event: { events, loading }, getEvents }) => {
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <>
      <h1 className="uk-text-center">Events</h1>

      <div className="uk-container">
        <div class="uk-width-1-2 uk-align-center" />
        <div className="uk-grid">
          <div className="uk-width-1-4@s uk-margin uk-visible@s">
            <LeftSidebar />
          </div>
          <div className="uk-width-expand@s">
            {events.map((event, index) => (
              <EventCard key={index} event={event} cardType="default" />
            ))}
          </div>
          <div className="uk-width-1-4@s">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

EventsPage.propTypes = {
  event: PropTypes.object.isRequired,
  getEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { getEvents }
)(EventsPage);
