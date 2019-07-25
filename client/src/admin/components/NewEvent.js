import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Alert from "../../components/Alert";
import { addEvent } from "../../actions/event";

const NewEvent = ({ addEvent, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    locationUrl: "",
    body: "",
    publish: false
  });

  const { title, date, time, location, locationUrl, body, publish } = formData;

  const [file, setFile] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    const fd = new FormData();

    for (let key in formData) {
      fd.append(key, formData[key]);
    }
    fd.append("postImage", file);

    addEvent(fd, history);
  };

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageFile = e => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="uk-container uk-align-center uk-width-2-3@l">
      <h2>Calendar</h2>

      <Link to="/calendar" className="uk-button">
        <span uk-icon="icon: arrow-left" />
        Back to Events
      </Link>

      <form onSubmit={e => onSubmit(e)} className="uk-margin-large-top">
        <fieldset class="uk-fieldset">
          <div className="uk-margin">
            Title
            <input
              className="uk-input"
              type="text"
              placeholder="Enter a post title"
              name="title"
              value={title}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="uk-grid">
            <div className="uk-width-1-4@s">
              Date
              <input
                type="date"
                className="uk-input"
                id="form-horizontal-text"
                data-uk-datepicker="{format:'DD.MM.YYYY'}"
                name="date"
                value={date}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="uk-width-1-4@s">
              Time
              <input
                type="time"
                className="uk-input"
                id="form-horizontal-text"
                name="time"
                value={time}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="uk-width-expand@s">
              <p className="uk-margin-top">
                Leave time as is if no specific event start time
              </p>
            </div>
          </div>
          <div className="uk-margin">
            Location
            <input
              className="uk-input"
              type="text"
              placeholder="e.g New Brunswick, NJ"
              name="location"
              value={location}
              onChange={e => onChange(e)}
            />
          </div>

          <div className="uk-margin">
            Event Details
            <textarea
              className="uk-textarea"
              rows="10"
              placeholder="Enter event's information"
              data-uk-htmleditor="{markdown:true}"
              name="body"
              value={body}
              onChange={e => onChange(e)}
            />
          </div>
          <div class="js-upload uk-placeholder uk-text-center">
            <span uk-icon="icon: cloud-upload" />{" "}
            <span class="uk-text-middle">
              Attach images by dropping them here or
            </span>
            <div uk-form-custom>
              <input
                type="file"
                name="postImage"
                multiple
                onChange={e => handleImageFile(e)}
              />
            </div>
          </div>
          <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label>
              <input
                className="uk-checkbox"
                type="checkbox"
                name="publish"
                value={publish}
                onChange={e => {
                  setFormData({ ...formData, publish: !publish });
                }}
              />{" "}
              Publish
            </label>
          </div>
          <div className="uk-alert-danger uk-margin-bottom">
            <Alert />
          </div>
          <Link to="/admin" className="uk-button uk-button-default">
            Cancel
          </Link>
          <button className="uk-button uk-button-primary uk-align-right">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

NewEvent.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addEvent }
)(withRouter(NewEvent));
