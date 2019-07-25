import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import IconNav from "./Iconnav";
import PostCard from "./PostCard";
import Spinner from "../../components/Spinner";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading || posts === null ? (
    <Spinner />
  ) : (
    <div className="uk-container uk-align-center">
      <h2>Posts</h2>
      <Link to="/admin" className="uk-button">
        <span uk-icon="icon: arrow-left" />
        Back to Dashboard
      </Link>
      <IconNav />
      <div className="uk-grid uk-margin-large-top">
        <div className="uk-width-auto@s">
          <ul
            className="uk-tab-left"
            uk-tab="connect: #component-tab-left; animation: uk-animation-fade">
            <li>
              <a href="#">Headlines</a>
            </li>
            <li>
              <a href="#">Featured</a>
            </li>
            <li>
              <a href="#">Standard</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Spotlight</a>
            </li>
            <li>
              <a href="#">Hall of Fame</a>
            </li>
          </ul>
        </div>
        <div className="uk-width-expand@s">
          <ul id="component-tab-left" className="uk-switcher">
            <li>
              {posts
                .filter(post => post.posttype === "headline")
                .map(post => {
                  return <PostCard key={post._id} post={post} />;
                })}
            </li>
            <li>
              {posts
                .filter(
                  post =>
                    post.posttype === "featured" && post.category === "news"
                )
                .map(post => {
                  return <PostCard key={post._id} post={post} />;
                })}
            </li>
            <li>
              {posts
                .filter(post => post.posttype === "standard")
                .map(post => {
                  return <PostCard key={post._id} post={post} />;
                })}
            </li>
            <li>
              {posts
                .filter(post => post.category === "profile")
                .map(post => {
                  return <PostCard key={post._id} post={post} />;
                })}
            </li>
            <li>
              {posts
                .filter(post => post.category === "spotlight")
                .map(post => {
                  return <PostCard key={post._id} post={post} />;
                })}
            </li>
            <li>
              {posts
                .filter(post => post.category === "hof")
                .map(post => {
                  return <PostCard key={post._id} post={post} />;
                })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const PostWrapper = styled.div`
  .links a {
    margin-right: 15px;
  }
`;

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
