import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { deleteComment } from "../actions/post";
import { connect } from "react-redux";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => {
  return (
    <>
      <article
        className="uk-comment uk-visible-toggle uk-margin-large"
        tabIndex="-1">
        <header className="uk-comment-header uk-position-relative">
          <div className="uk-grid uk-flex-middle">
            <div className="uk-width-auto">
              <img
                className="uk-comment-avatar uk-border-circle"
                src={avatar}
                width="50"
                height="40"
                alt=""
              />
            </div>
            <div className="uk-width-expand">
              <h6 className="uk-margin-remove uk-text-bold">
                {auth.isAuthenticated ? (
                  <Link
                    to={`/user/${user}`}
                    className="uk-link-reset uk-text-capitalize">
                    {name}
                  </Link>
                ) : (
                  <a className="uk-link-reset uk-text-capitalize">{name}</a>
                )}
              </h6>
              <p className="uk-comment-meta uk-margin-remove-top">
                <a className="uk-link-reset">{moment(date).fromNow()}</a>
              </p>
            </div>
          </div>

          {auth.isAuthenticated &&
            !auth.loading &&
            (user === auth.user._id || auth.user.role === "admin") && (
              <div className="uk-position-top-right uk-position-small uk-hidden-hover">
                <a
                  onClick={() => deleteComment(postId, _id)}
                  className="uk-link-muted">
                  Remove
                </a>
              </div>
            )}
        </header>
        <div className="uk-comment-body">
          <p>{text}</p>
        </div>
      </article>
    </>
  );
};

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
