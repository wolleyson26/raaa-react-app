import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";
import { getEvents } from "../../actions/event";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner";

const EventsSnippet = ({ event: { events, loading }, getEvents }) => {
  useEffect(() => {
    getEvents();
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <div className="uk-overflow-auto">
        <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
          <thead>
            <tr>
              <th className="uk-table-expand">Title</th>
              <th className="uk-width-small">Date</th>
              <th className="uk-width-small">Time</th>
              <th className="uk-table-shrink uk-text-nowrap">Location</th>
            </tr>
          </thead>
          <tbody>
            {events &&
              events.slice(0, 5).map((event, index) => (
                <tr key={index}>
                  <td>
                    {" "}
                    <Link
                      to={`/user/${event._id}`}
                      className="uk-link-reset uk-text-capitalize"
                      href="">
                      {event.title}
                    </Link>
                  </td>
                  <td className="uk-table-link">
                    {moment(event.date).format("ll")}
                  </td>
                  <td className="uk-text-truncate">
                    {moment(event.date).format("LT")}
                  </td>
                  <td className="uk-text-truncate">{event.location}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

EventsSnippet.propTypes = {
  event: PropTypes.object.isRequired,
  getEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { getEvents }
)(EventsSnippet);
