import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPost, updatePost } from "../../actions/post";
import IconNav from "./Iconnav";
import Spinner from "../../components/Spinner";
import Alert from "../../components/Alert";
import PropTypes from "prop-types";

const EditPost = ({ post: { post, loading }, getPost, updatePost, match }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    posttype: "",
    date: "",
    classyear: "",
    postbody: "",
    caption: "",
    meta: "",
    publish: ""
  });

  const [toggleClassYear, setClassYear] = useState(true);
  const [file, setFile] = useState("");

  useEffect(() => {
    getPost(match.params.id);
  }, [loading]);

  useEffect(() => {
    setFormData({
      title: post === null || !post.title ? "" : post.title,
      category: post === null || !post.category ? "" : post.category,
      posttype: post === null || !post.posttype ? "" : post.posttype,
      date: post === null || !post.date ? "" : post.date,
      classyear: post === null || !post.classyear ? "" : post.classyear,
      postbody: post === null || !post.postbody ? "" : post.postbody,
      caption:
        post === null || !post.image || !post.image.caption
          ? ""
          : post.image.caption,
      meta: post === null || !post.meta ? "" : post.meta,
      publish: post === null || !post.publish ? "" : post.publish
    });

    const image = `/api/posts/image/${match.params.id}`;

    setFile({
      file: image
    });
    setClassYear({
      classYear:
        post === null || loading || !post.classYear ? "" : post.classYear
    });
  }, [post]);

  const onFormSubmit = e => {
    e.preventDefault();

    const id = match.params.id;

    const fd = new FormData();

    for (let key in formData) {
      fd.append(key, formData[key]);
    }

    fd.append("postImage", file);

    updatePost(id, fd);
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (e.target.value === "hof") {
      setClassYear(!toggleClassYear);
    } else {
      setClassYear({ toggleClassYear: true });
    }
  };

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  // { new Date(formData.date).toLocaleDateString() }
  // console.log(formData.date.substring(0, 10));

  return (
    <div className="uk-container uk-align-center uk-width-2-3@l">
      <h1 className="uk-heading-line uk-text-center">
        <span>Edit Post</span>
      </h1>
      <Link to="/posts" className="uk-button">
        <span uk-icon="icon: arrow-left" />
        Back to Posts
      </Link>
      <IconNav />
      <form onSubmit={e => onFormSubmit(e)} className="uk-margin-large-top">
        <div className="uk-grid uk-width-expand">
          <div className="uk-width-expand">
            <div uk-form-custom="target: > * > span:last-child">
              <select
                name="category"
                value={formData.category}
                onChange={e => handleChange(e)}>
                <option value="news"> News</option>
                <option value="profile"> Profile</option>
                <option value="spotlight">Spotlight</option>
                <option value="hof"> Add Hall of Famer</option>
              </select>
              <span className="uk-link">
                <span uk-icon="icon: pencil" />
                <span />
              </span>
              <span uk-icon="icon: chevron-down" />
            </div>
          </div>
          <div className="uk-width-expand">
            <div uk-form-custom="target: > * > span:last-child">
              <select
                name="posttype"
                value={formData.posttype}
                onChange={e => handleChange(e)}>
                <option value="featured"> Featured</option>
                <option value="headline"> Headline</option>
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
                  name="date"
                  value={formData.date.substring(0, 10)}
                  onChange={e => handleChange(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="uk-width-1-4 uk-margin-top">
          <label>Class Year</label>
          <input
            className="uk-input"
            type="year"
            placeholder="eg. 2010"
            name="classyear"
            value={formData.classyear}
            onChange={e => handleChange(e)}
            disabled={toggleClassYear}
          />
        </div>
        <div className="uk-margin">
          Title
          <input
            className="uk-input"
            type="text"
            placeholder="Enter a post title"
            name="title"
            value={formData.title}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="uk-margin">
          Post Body
          <textarea
            className="uk-textarea"
            rows="25"
            placeholder="Enter a post body"
            data-uk-htmleditor="{markdown:true}"
            name="postbody"
            value={formData.postbody}
            onChange={e => handleChange(e)}
          />
        </div>
        <div class="js-upload uk-placeholder uk-text-center">
          <div>
            <img src={`../${file.file}`} alt="" height="120" width="500" />
          </div>
          <span uk-icon="icon: cloud-upload" />{" "}
          <span class="uk-text-middle">
            Attach images by dropping them here or
          </span>
          <div uk-form-custom>
            <input
              type="file"
              name="postImage"
              multiple
              value={formData.postImage}
              onChange={e => handleFileChange(e)}
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
            value={formData.caption}
            onChange={e => handleChange(e)}
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
            value={formData.meta}
            onChange={e => handleChange(e)}
          />
        </div>

        <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
          <label>
            <input
              className="uk-checkbox"
              type="checkbox"
              name="publish"
              value={formData.publish}
              checked={formData.publish}
              onChange={e => {
                setFormData({ ...formData, publish: !formData.publish });
              }}
            />{" "}
            Publish
          </label>
        </div>
        <div className="uk-alert-danger uk-margin-bottom">
          <Alert />
        </div>
        <Link to="/posts" className="uk-button uk-button-default">
          Cancel
        </Link>
        <button className="uk-button uk-button-primary uk-align-right">
          Update
        </button>
      </form>
    </div>
  );
};

EditPost.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost, updatePost }
)(EditPost);
