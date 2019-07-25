import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../actions/profile";
import Spinner from "../components/Spinner";

// Components
import Carousel from "../components/Carousel";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import SectionMiddleHome from "../components/SectionMiddleHome";
import EventsSlide from "../components/EventsSlide";
import Profile from "../components/auth/Profile";

const Home = ({ profile: { loading } }) => {
  return loading === null ? (
    <Spinner />
  ) : (
    <div className="uk-container">
      <Carousel />
      <div className="uk-grid">
        <div className="uk-width-1-4@s uk-margin uk-visible@s">
          <LeftSidebar />
        </div>
        <div className="uk-width-expand@s">
          <SectionMiddleHome />
        </div>
        <div className="uk-width-1-4@s">
          <RightSidebar />
        </div>
      </div>

      <EventsSlide />
    </div>
  );
};

Home.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(Home);
