import React, { useEffect } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../actions/post";
import Search from "../components/SearchForm";
import MediaIcons from "../components/MediaIcons";
import Donate from "../components/DonateCard";
import photo from "../imgs/photo7.jpg";

const HOFClasses = ({ post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  let post = _.chain(posts)
    .sortBy(Object.keys, ["asc"])
    .filter(post => post.category === "hof" && post.publish === true)
    .groupBy("classyear")
    .value();

  console.log(post);

  // console.log(posts);
  return (
    <div className="uk-container">
      <h2>Hall of Fame Classes</h2>

      <div className="uk-grid">
        <div className="uk-width-expand@s">
          <Search placeholder="Search Hall of Famers..." />
          <ul uk-accordion="multiple: true">
            {<div>{JSON.stringify(post)}</div>}
          </ul>
          <br /> <br />
        </div>
        <div className="uk-width-1-4@s uk-margin uk-visible@s" />
      </div>
    </div>
  );
};

HOFClasses.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(HOFClasses);
