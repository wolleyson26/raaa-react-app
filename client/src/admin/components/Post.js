import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import IconNav from "./Iconnav";
import Alert from "../../components/Alert";

const Post = ({ addPost, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "news",
    posttype: "standard",
    date: "",
    classyear: "",
    postbody: "",
    caption: "",
    meta: "",
    publish: false
  });

  const {
    title,
    category,
    posttype,
    date,
    classyear,
    postbody,
    caption,
    meta,
    publish
  } = formData;

  const [file, setFile] = useState("");

  const [classYear, setClassYear] = useState(true);

  const onSubmit = e => {
    e.preventDefault();

    const fd = new FormData();

    for (let key in formData) {
      fd.append(key, formData[key]);
    }
    fd.append("postImage", file);

    addPost(fd, history);
  };

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (e.target.value === "hof") {
      setClassYear(!classYear);
    } else {
      setClassYear({ classYear: true });
    }
  };

  const handleImageFile = e => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="uk-container uk-align-center uk-width-2-3@l">
      <h2>
        New Post <i uk-icon="icon: file-edit" />
      </h2>

      <Link to="/admin" className="uk-button">
        <span uk-icon="icon: arrow-left" />
        Back to Dashboard
      </Link>
      <IconNav />
      <form onSubmit={e => onSubmit(e)} className="uk-margin-large-top">
        <fieldset class="uk-fieldset">
          <div className="uk-grid uk-width-expand">
            <div className="uk-width-1-3">
              <div uk-form-custom="target: > * > span:last-child">
                <select
                  name="category"
                  value={category}
                  onChange={e => onChange(e)}>
                  <option value="news"> News</option>
                  <option value="profile"> Profile</option>
                  <option value="spotlight">Add a Spotlight Article</option>
                  <option value="hof"> Add Hall of Famer</option>
                </select>
                <span className="uk-link">
                  <span uk-icon="icon: pencil" />
                  <span />
                </span>
                <span uk-icon="icon: chevron-down" />
              </div>
            </div>
            <div className="uk-width-1-3">
              <div uk-form-custom="target: > * > span:last-child">
                <select
                  name="posttype"
                  value={posttype}
                  onChange={e => onChange(e)}>
                  <option value="headline"> Headline</option>
                  <option value="featured"> Featured</option>
                  <option value="standard"> Standard</option>
                </select>
                <span className="uk-link">
                  <span uk-icon="icon: pencil" />
                  <span />
                </span>
                <span uk-icon="icon: chevron-down" />
              </div>
            </div>
            <div className="uk-width-expand">
              <div className="uk-grid">
                <div className="uk-width-1-4">
                  <label>Date:</label>
                </div>
                <div className="uk-width-expand">
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
              </div>
            </div>
          </div>
          <div className="uk-width-1-4">
            <label>Class Year</label>
            <input
              className="uk-input"
              type="text"
              placeholder="eg. 2010"
              name="classyear"
              value={classyear}
              onChange={e => onChange(e)}
              disabled={classYear}
            />
          </div>
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

          <div className="uk-margin">
            Post Body
            <textarea
              className="uk-textarea"
              rows="10"
              placeholder="Enter a post body"
              data-uk-htmleditor="{markdown:true}"
              name="postbody"
              value={postbody}
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
          <div className="uk-margin">
            Image Caption
            <textarea
              className="uk-textarea"
              rows="1"
              placeholder="Enter some words to describe this image"
              data-uk-htmleditor="{markdown:true}"
              name="caption"
              value={caption}
              disabled={!file ? "true" : "false"}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="uk-margin">
            Article Short Description
            <textarea
              className="uk-textarea"
              rows="2"
              placeholder="Enter a short post description"
              data-uk-htmleditor="{markdown:true}"
              name="meta"
              value={meta}
              onChange={e => onChange(e)}
            />
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

Post.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(withRouter(Post));
