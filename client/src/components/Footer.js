import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import SocialIcons from "../components/MediaIcons";

const Footer = props => {
  return (
    <FooterWrapper>
      <div
        style={{
          background: "brown",
          marginTop: "200px"
        }}>
        <div className="uk-container uk-padding uk-padding-remove-bottom">
          <div className="uk-grid">
            <div className="uk-width-1-3@s">
              <div className="uk-width-expand@s uk-remove-padding mid-links">
                <h2>Site Links</h2>
                <div className="uk-grid">
                  <div className="uk-width-expand@s">
                    <ul className="uk-padding-remove-left">
                      <li>
                        <Link to="/">Home</Link>
                      </li>

                      <li>
                        <Link to="/about">About</Link>
                      </li>

                      <li>
                        <Link to="/hof">Hall of Fame</Link>
                      </li>

                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="uk-width-expand@s">
                    <ul className="uk-padding-remove-left">
                      <li>
                        <Link to="/news">News & Events</Link>
                      </li>

                      <li>
                        <Link to="/connect">Connect</Link>
                      </li>

                      <li>
                        <Link to="/getinvolved">Get Involved</Link>
                      </li>

                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="uk-width-expand@s uk-text-center uk-margin-top">
              <h2>We hope you can support our community by donating</h2>
              <Link
                className="uk-button uk-button-large uk-button-default"
                style={{ color: "#fff" }}>
                Donate
              </Link>
            </div>
          </div>
          <div className="uk-grid">
            <div className="uk-expand@s">
              <h2>Contact</h2>
              <p> RAAA, Inc P.O. Box 422 Piscataway, NJ 08855-0422</p>
              Forward emails to: info@rutgersblackalumni.org
            </div>
            <div className="uk-width-expand@s">
              <div className="uk-text-center">
                <SocialIcons />
              </div>
            </div>
            <div className="uk-width-expand">
              <div className="uk-grid uk-padding">
                <div
                  className="uk-width-expand"
                  style={{ borderRight: ".5px solid #fff" }}>
                  <Link to="/contact">Questions & Comments</Link>
                </div>
                <div className="uk-width-expand">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="uk-heading-line-xsmall uk-margin-remove-bottom" />
        <div className="uk-text-center uk-padding">
          &copy; 2019 Copyright:
          <Link to="/">
            {" "}
            Rutgers African-American Alumni Alliance (RAAA), Inc.. All Rights
            Reserved{" "}
          </Link>
        </div>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  * {
    color: #fff;
    font-size: 13px;
  }
  h2 {
    font-size: 20px;
  }
  a {
    color: #fff;
  }

  button {
    color: #000;
  }
`;

Footer.propTypes = {};

export default Footer;
