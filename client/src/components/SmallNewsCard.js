import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SmallNewsCard = ({ post }) => {
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin uk-margin-remove-top">
        <div className="uk-card-media-top">
          <img src={`/api/posts/image/${post._id}`} alt={post.image.caption} />
        </div>
        <div className="uk-card-body">
          <h4 className="uk-card-meta">{post.title}</h4>
          <p>{post.postbody.substring(0, 47) + " ..."}</p>
          <Link to={`/news/${post._id}`} className="uk-button uk-button-text">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

SmallNewsCard.propTypes = {};

export default SmallNewsCard;
