import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Footer = props => {
  return (
    <FooterWrapper>
      <div
        style={{
          background: "brown",
          marginTop: "200px",
          paddingBottom: "50px"
        }}>
        <div className="uk-container uk-padding">
          <div className="uk-grid">
            <div className="uk-width-1-3@s">
              <div className="uk-width-expand@s uk-remove-padding mid-links">
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
                <div className="uk-margin-xlarge-top">
                  <h2>Contact</h2>
                  <p> RAAA, Inc P.O. Box 422 Piscataway, NJ 08855-0422</p>
                  Forward emails to: info@rutgersblackalumni.org
                </div>
              </div>
            </div>
            <div className="uk-width-expand@s uk-padding uk-text-center uk-padding-remove-right">
              <p>
                Support for the continued development of Semantic UI comes
                directly from the community.
              </p>
              <button className="uk-button">Donate</button>

              <div className="uk-margin-large-top">
                <div className="uk-margin-medium-top uk-text-center">
                  <h5>Connect with us on Social Media</h5>
                  <a
                    style={{ background: "black" }}
                    href="https://facebook.com"
                    className="uk-icon-button uk-margin-small-right"
                    uk-icon="facebook"
                  />
                  <a
                    style={{ background: "black" }}
                    href="https://instagram.com"
                    className="uk-icon-button  uk-margin-small-right"
                    uk-icon="instagram"
                  />
                  <a
                    style={{ background: "black" }}
                    href="https://twitter.com"
                    className="uk-icon-button"
                    uk-icon="twitter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="uk-heading-line-xsmall" />
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
