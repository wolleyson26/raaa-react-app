import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLike, removeLike } from "../actions/post";

const NewsCard = ({ post, addLike, removeLike, auth }) => {
  return (
    <div>
      <div className="uk-margin-large-bottom">
        <div className="media-top">
          <img
            src={`/${post.image.thumbnail}`}
            alt={post.image.caption}
            className="uk-width-expand"
          />
        </div>
        <div className="uk-body uk-margin">
          <h3 className="uk-card-title">{post.title}</h3>
          <p className="uk-article-meta">
            Posted by{" "}
            {auth.isAuthenticated ? (
              <Link to={`/user/${post.user}`} className="uk-text-capitalize">
                {`${post.name.firstName} ${post.name.lastName}`}
              </Link>
            ) : (
              <a className="uk-text-capitalize">
                {`${post.name.firstName} ${post.name.lastName}`}
              </a>
            )}{" "}
            on {moment(post.dateposted).format("MMM Do YYYY")} at{" "}
            {moment(post.dateposted).format("h:mm A")}. In{" "}
            <Link to={post.category} className="uk-text-capitalize">
              {post.category}
            </Link>
          </p>

          <p>{post.postbody.substring(0, 200) + " ..."}</p>
          <div className="uk-grid uk-child-width-auto">
            <div>
              <Link
                to={`/news/${post._id}`}
                className="uk-button uk-button-text">
                Read more
              </Link>
            </div>
            {auth.isAuthenticated ? (
              <div>
                <a
                  onClick={() => addLike(post._id)}
                  className="uk-link-muted uk-link-reset">
                  <span uk-icon="icon: heart" />
                </a>{" "}
                {post.likes.length > 0 && (
                  <span>{post.likes.length} likes</span>
                )}
              </div>
            ) : (
              <div>
                <span className="uk-link-muted uk-link-reset">
                  <span uk-icon="icon: heart" />
                </span>{" "}
                {post.likes.length > 0 && (
                  <span>{post.likes.length} likes</span>
                )}
              </div>
            )}
            <div>
              <Link
                to={`/news/${post._id}`}
                className="uk-link-muted uk-link-reset">
                <span uk-icon="icon: comments" />{" "}
                {post.comments.length > 0 && (
                  <span>{post.comments.length} </span>
                )}{" "}
                Comments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  post: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike }
)(NewsCard);
