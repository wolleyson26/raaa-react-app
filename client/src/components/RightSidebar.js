import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../actions/post";
import SmallNewsCard from "./SmallNewsCard";
import SearchForm from "./SearchForm";
import Spinner from "./Spinner";

const RightSidebar = ({ post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <div className="uk-visible@s">
        <SearchForm placeholder="Search site..." />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {posts
            .filter(
              post =>
                post.category === "profile" && post.posttype === "featured"
            )
            .slice(0, 1)
            .map((post, index) => {
              return (
                <div key={index}>
                  <div className="uk-card-badge uk-label">Profile</div>
                  <SmallNewsCard post={post} />
                </div>
              );
            })}
        </div>
      )}

      {loading ? (
        <Spinner />
      ) : (
        <div>
          {posts
            .filter(
              post =>
                post.category === "spotlight" && post.posttype === "featured"
            )
            .slice(0, 1)
            .map((post, index) => {
              return (
                <div key={index}>
                  <div className="uk-label uk-label-success">Sportlight</div>
                  <SmallNewsCard post={post} />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

RightSidebar.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(RightSidebar);
