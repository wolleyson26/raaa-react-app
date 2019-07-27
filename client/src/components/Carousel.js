import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions/post";
import PropTypes from "prop-types";
import Slide from "./Slide";

import SingleLink from "./SingleLink";

const Carousel = ({ post: { posts }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div uk-slideshow="min-height: 300; max-height: 500; animation: pull; autoplay: true; pause-on-hover">
      <div
        className="uk-position-relative uk-visible-toggle uk-light uk-margin-bottom"
        tabIndex="-1">
        <ul className="uk-slideshow-items">
          {posts
            .filter(
              post =>
                post.posttype === "headline" &&
                post.category === "news" &&
                post.publish === true
            )
            .map((post, index) => {
              return (
                <Slide
                  key={index}
                  postId={post._id}
                  photo={post.image.thumbnail}
                  title={post.title}
                  text={post.postbody.slice(0, 245) + "..."}
                />
              );
            })
            .slice(0, 4)}
        </ul>
        <a
          className="uk-slidenav-large uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slideshow-item="previous">
          <i className="fas fa-chevron-left fa-2x" />
        </a>
        <a
          className="uk-slidenav-large uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slideshow-item="next">
          <i className="fas fa-chevron-right fa-2x" />
        </a>
      </div>

      <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin" />
    </div>
  );
};

Carousel.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Carousel);
