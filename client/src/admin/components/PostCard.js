import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import photo5 from "../../imgs/photo5.jpg";

const PostCard = ({ post: { _id, image, title, postbody } }) => {
  return (
    <div
      className="uk-card uk-card-default uk-card-small uk-card-body uk-grid uk-visible-toggle uk-margin-auto"
      tabIndex="-1">
      <div className="uk-width-1-6@s uk-padding-remove uk-text-center">
        {image && <img src={image.thumbnail} width="120" height="120" />}
      </div>
      <div className="uk-width-expand@s uk-padding-remove-right">
        <h3 className="uk-card-title uk-margin-remove-bottom">{title}</h3>
        <p className="uk-margin-remove-top">
          {postbody.substring(0, 110) + "..."}
        </p>
      </div>
      <div className="uk-width-auto uk-padding-remove">
        <ul className="uk-invisible-hover uk-iconnav">
          <Link
            to={`/edit/${_id}`}
            href="#"
            uk-icon="icon: pencil"
            className="icon"
          />
          <Link to="delete" href="#" uk-icon="icon: trash" className="icon" />
        </ul>
      </div>
    </div>
  );
};

PostCard.propTypes = {};

export default PostCard;
