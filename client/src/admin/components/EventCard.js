import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import PropTypes from "prop-types";

const EventCard = ({ event, cardType }) => {
  return (
    <Link to={`calendar/${event._id}`} style={{ textDecoration: "none" }}>
      <div className="uk-margin-small-bottom">
        <div className={`uk-card uk-card-${cardType} uk-card-body`}>
          <h3 className="uk-card-title">
            {new Date(event.date).toDateString()}
            {event.time ? (
              <span style={{ fontSize: "15px", marginLeft: "10px" }}>
                {" "}
                at {moment(event.time, "HH:mm").format("hh:mm A")}
              </span>
            ) : (
              ""
            )}
          </h3>
          <p>{event.title.substring(0, 40) + " ..."}</p>
        </div>
      </div>
    </Link>
  );
};

EventCard.propTypes = {};

export default EventCard;
