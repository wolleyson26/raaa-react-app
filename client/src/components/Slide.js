import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Slide = ({ postId, photo, title, text }) => {
  return (
    <SlideWrapper>
      <li>
        <img src={photo} alt="" className="uk-position-center" />
        <div className="uk-overlay-primary uk-overlay-bottom uk-position-bottom-right uk-position-small uk-padding-small overlay">
          <h3 className="uk-margin-remove slide-header">{title}</h3>
          <p className="uk-margin-remove uk-visible@s">{text}</p>

          <Link
            to={`/news/${postId}`}
            className="uk-button uk-button-text"
            href="#">
            Read more
          </Link>
        </div>
      </li>
    </SlideWrapper>
  );
};

const SlideWrapper = styled.div`
  @media (max-width: 768px) {
    .slide-header {
      font-size: 15px;
    }
    .overlay {
      margin-bottom: 40px;
    }
  }
`;

Slide.propTypes = {};

export default Slide;
