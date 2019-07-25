import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions/post";
import PropTypes from "prop-types";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";

const Article = ({ post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div>
      {posts
        .filter(post => post.category === "spotlight" && post.publish)
        .map((post, index) => {
          return <NewsCard key={index} post={post} />;
        })}
    </div>
  );
};

Article.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Article);
