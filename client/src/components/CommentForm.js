import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addComment } from "../actions/post";

const CommentForm = ({ auth, addComment, postId }) => {
  const [text, setText] = useState("");

  return (
    <>
      <div className="uk-margin">
        <form
          onSubmit={e => {
            e.preventDefault();
            addComment(postId, { text });
            setText("");
          }}>
          <textarea
            className="uk-textarea"
            rows="2"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Comment..."
          />

          {auth.isAuthenticated ? (
            <button className="uk-button uk-button-default uk-margin">
              Send
            </button>
          ) : (
            <>
              <button
                disabled
                className="uk-button uk-button-default uk-margin">
                Send
              </button>{" "}
              <span
                className="uk-text-mute uk-text-bold"
                style={{ fontSize: "10px" }}>
                {" "}
                You must be logged in to comment
              </span>
            </>
          )}
        </form>
      </div>
    </>
  );
};

CommentForm.propTypes = {
  auth: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm);
