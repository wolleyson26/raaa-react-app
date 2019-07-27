import React, { useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPost, addLike, removeLike } from "../actions/post";
import PropTypes from "prop-types";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import CommentForm from "../components/CommentForm";
import CommentItem from "../components/CommentItem";
import Spinner from "../components/Spinner";

const ShowArticle = ({
  post: { post, loading },
  getPost,
  match,
  auth,
  addLike,
  removeLike
}) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [match.params.id]);

  const newsArticle = () => {
    return loading ? (
      <Spinner />
    ) : (
      <div className="uk-margin-large-bottom">
        <div className="media-top">
          <img
            src={`/api/posts/image/${post._id}`}
            alt={post.image.thumbnail}
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
          <p>{post.postbody}</p>
          <div className="uk-grid uk-child-width-auto">
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
              <div className="uk-link-muted uk-link-reset">
                <span uk-icon="icon: comments" /> {post.comments.length}{" "}
                Comments
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="uk-container">
      <div className="uk-grid">
        <div className="uk-width-1-4@s uk-margin uk-visible@s">
          <LeftSidebar />
        </div>
        <div className="uk-width-expand@s">
          {loading ? (
            <Spinner />
          ) : (
            post && (
              <>
                {newsArticle()}

                <CommentForm postId={post._id} />
                <div className="uk-margin">
                  <h4>Comments</h4>
                  {post &&
                    post.comments.map((comment, index) => (
                      <CommentItem
                        key={index}
                        comment={comment}
                        postId={post._id}
                      />
                    ))}
                </div>
              </>
            )
          )}
        </div>
        <div className="uk-width-1-4@s uk-visible@s">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

ShowArticle.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getPost, addLike, removeLike }
)(ShowArticle);
