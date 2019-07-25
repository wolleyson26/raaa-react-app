import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../components/Spinner";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import SectionMiddleNews from "../components/SectionMiddleNews";
import SearchForm from "../components/SearchForm";

const News = ({ auth, loading }) => {
  return loading === null ? (
    <Spinner />
  ) : (
    <>
      <h1 className="uk-text-center">Latest News</h1>

      <div className="uk-container">
        <div className="uk-width-1-2 uk-align-center">
          <SearchForm placeholder="Search news..." />
        </div>
        <div className="uk-grid">
          <div className="uk-width-1-4@s uk-margin uk-visible@s">
            <LeftSidebar />
          </div>
          <div className="uk-width-expand@s">
            <SectionMiddleNews />
          </div>
          <div className="uk-width-1-4@s">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

News.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(News);
