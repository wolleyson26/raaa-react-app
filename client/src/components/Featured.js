import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions/post";
import PropTypes from "prop-types";
import photo1 from "../imgs/photo1.jpg";
import photo2 from "../imgs/photo2.jpg";
import photo3 from "../imgs/photo3.jpg";
import photo6 from "../imgs/photo6.jpg";
import photo9 from "../imgs/photo9.jpg";

const Featured = ({ post: { posts }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  // console.log(posts[posts.length - 1]);

  const featuredPost = posts[posts.length - 1];

  return (
    <div className="uk-child-width-1-2@m uk-grid uk-height-match">
      <div>
        <div className="uk-card-small uk-card-default">
          <div className="uk-card-media-top">
            <img src={photo6} alt="" className="uk-contain" />
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">featuredPost</h3>
            <p>
              It began in September 2014, in partnership with the Emily and
              Ellsworth Austin Educational Trust,
            </p>
            <a href="#" className="uk-button uk-button-text">
              Read more
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-card-small uk-card-default">
          <div className="uk-card-body">
            <h3 className="uk-card-title">
              CLASS OF 1971 PAUL ROBESON PLAZA GROUND BREAKING CEREMONY
            </h3>
            <p>
              The Paul Robeson Plaza Groundbreaking Ceremony was held on
              Wednesday, September 5 on the College Ave campus in New Brunswick.
              Please join us as we walk into the next stage our very successful
              crowd funding campaign in support of the Class of 1971 Milestone
              class project.
            </p>
            <a href="#" className="uk-button uk-button-text">
              Read more
            </a>
          </div>
          <div className="uk-card-media-bottom">
            <img src={photo9} alt="" className="uk-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

Featured.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Featured);
