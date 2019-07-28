import _ from "lodash";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import logo from "../raaalogo.png";
import { logout } from "../actions/auth.js";

import SingleLink from "./SingleLink";

const LINKS = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Hall of Fame", link: "/hof" },
  { text: "Gallery", link: "/gallery" },
  { text: "News & Events", link: "/news" },
  { text: "Connect", link: "/connect" },
  { text: "Get Involved", link: "/getinvolved" },
  { text: "Contact", link: "/contact" }
];

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <div className="uk-container uk-padding-small">
      <NavWrapper className="uk-grid">
        <div className="uk-width-1-4@s logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="uk-width-expand@s uk-text-center uk-remove-padding mid-links">
          <ul>
            <li>
              <Link
                to="/"
                className="uk-button uk-button-text uk-margin-small-right mid-link"
                href="#">
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="uk-button uk-button-text  uk-margin-small-right mid-link"
                href="#">
                About
              </Link>
              <div uk-drop="mode: hover" className="uk-margin-remove-top">
                <div className="uk-card uk-card-body uk-card-default">
                  <ul className="uk-list uk-link-text uk-align-left uk-text-left">
                    <h4 className="uk-card-title">
                      <span className="uk-link-heading">About RAAA</span>
                    </h4>
                    <li>
                      <Link to="/welcome">Welcome</Link>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Mission</a>
                    </li>
                    <li>
                      <a href="#">Leadership</a>
                    </li>
                    <li>
                      <a href="#">History</a>
                    </li>
                    <li>
                      <a href="#">By Laws</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/hof"
                className="uk-button uk-button-text  uk-margin-small-right mid-link"
                href="#">
                Hall of Fame
              </Link>
              <div uk-drop="mode: hover" className="uk-margin-remove-top">
                <div className="uk-card uk-card-body uk-card-default">
                  <ul className="uk-list uk-link-text uk-align-left uk-text-left">
                    <h3 className="uk-card-title">
                      <span className="uk-link-heading">Hall of Fame</span>
                    </h3>
                    <li>
                      <a href="#">Overview</a>
                    </li>
                    <li>
                      <a href="#">Current Class</a>
                    </li>
                    <li>
                      <a href="#">Previous Classes</a>
                    </li>
                    <li>
                      <a href="#">Award Dinner Information</a>
                    </li>
                    <li>
                      <a href="#">Award Tickets</a>
                    </li>
                    <li>
                      <a href="#">Nomination</a>
                    </li>
                    <li>
                      <a href="#">Sponsorship</a>
                    </li>
                    <li>
                      <a href="#">Current Sponsors</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/gallery"
                className="uk-button uk-button-text  uk-margin-small-right mid-link"
                href="#">
                Gallery
              </Link>
            </li>

            <li>
              <Link
                to="/news"
                className="uk-button uk-button-text  uk-margin-small-right mid-link"
                href="#">
                News & Events
              </Link>
              <div uk-drop="mode: hover" className="uk-margin-remove-top">
                <div className="uk-card uk-card-body uk-card-default">
                  <ul className="uk-list uk-link-text uk-align-left uk-text-left">
                    <li>
                      <Link to="/news">News</Link>
                    </li>
                    <li>
                      <Link to="/news/profile">Heritage Profiles</Link>
                    </li>
                    <li>
                      <Link to="/news/spotlight">Commmunity Spotlight</Link>
                    </li>
                    <li>
                      <Link to="/news/events">Events</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/connect"
                className="uk-button uk-button-text  uk-margin-small-right mid-link"
                href="#">
                Connect
              </Link>
              <div uk-drop="mode: hover" className="uk-margin-remove-top">
                <div className="uk-card uk-card-body uk-card-default">
                  <ul className="uk-list uk-link-text uk-align-left uk-text-left">
                    <li>
                      <a href="#">Membership Overview</a>
                    </li>
                    <li>
                      <a href="#">Pay/Renew Membership Dues</a>
                    </li>
                    <li>
                      <a href="#">Donate to Scholarship(s)</a>
                    </li>
                    <li>
                      <a href="#">Volunteer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/getinvolved"
                className="uk-button uk-button-text uk-margin-small-right mid-link"
                href="#">
                Get Involved
              </Link>
              <div uk-drop="mode: hover" className="uk-margin-remove-top">
                <div className="uk-card uk-card-body uk-card-default">
                  <ul className="uk-list uk-link-text uk-align-left uk-text-left">
                    <li>
                      <a href="#">Organizations</a>
                    </li>
                    <li>
                      <a href="#">Jobs & Internship</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/contact"
                className="uk-button uk-button-text  uk-margin-small-right mid-link"
                href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-width-1-4@s right-links uk-padding-remove-left">
          <div className="uk-align-right uk-margin-top">
            <Link
              link="/donate"
              text="Donate"
              style={{
                border: "2px solid #e03131",
                color: "#e03131",
                padding: "5px"
              }}>
              DONATE
            </Link>
            {!loading && (
              <>
                {isAuthenticated ? (
                  <>
                    <SingleLink link="/search" text="Search" />
                    <Link
                      to="/"
                      onClick={logout}
                      className="uk-button uk-button-text uk-margin-small-left">
                      LOGOUT
                    </Link>
                  </>
                ) : (
                  <>
                    <SingleLink link="/register" text="Register" />
                    <SingleLink link="/login" text="Login" />
                  </>
                )}
              </>
            )}
          </div>
        </div>
        <span uk-icon="menu" className="nav-bars" />
      </NavWrapper>
    </div>
  );
};

const NavWrapper = styled.nav`
  .right-links a {
    color: black;
    font-weight: bold;
  }
  .mid-links {
    padding-left: 0;
  }

  @media (min-width: 768px) {
    .nav-bars {
      display: none;
    }
  }

  .nav-bars {
    position: absolute;
    right: 40px;
    top: 30px;
  }

  @media (max-width: 768px) {
    .mid-links {
      display: none;
    }
    .logo {
      width: 250px;
    }
    .right-links {
      display: none;
    }
  }

  .mid-links a {
    color: #999;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: black;
    }
  }

  li {
    display: inline;
  }
`;

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
