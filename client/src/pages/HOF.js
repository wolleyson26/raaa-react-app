import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MediaIcons from "../components/MediaIcons";
import Donate from "../components/DonateCard";

const hof = props => {
  return (
    <div className="uk-container uk-margin-top">
      <h2 className="uk-text-center">HALL OF FAME</h2>
      <hr class="uk-divider-icon" />
      <div className="uk-grid">
        <div className="uk-width-1-4@s uk-margin uk-visible@s">
          <Donate />
          <MediaIcons />
        </div>
        <div className="uk-width-expand@s">
          <p>
            The Rutgers African-American Alumni Alliance (RAAA) Hall of Fame
            induction ceremony is an awards dinner and fundraising event that
            honors the achievements of graduates of African descent from Rutgers
            University and raises funds to support student scholarships. The
            RAAA Hall of Fame promotes interaction between students, alumni and
            administration. The Hall of Fame encourages students and young
            alumni to draw from their experiences at Rutgers to succeed
            academically, professionally and personally.
          </p>
          <ul className="uk-list uk-link-text">
            <li>
              <a href="/overview">Overview</a>
            </li>
            <li>
              <Link to="/hof/current">Current Class</Link>
            </li>
            <li>
              <Link to="/hof/classes">Hall Of Fame Classes</Link>
            </li>
            <li>
              <a href="/award-dinner-info">Award Dinner Information</a>
            </li>
            <li>
              <a href="/award-tickets">Purchase Award Tickets</a>
            </li>
            <li>
              <a href="/nomination-info">Nomination Information</a>
            </li>
            <li>
              <a href="/sponsorship-opportunities">Sponsorship Opportunities</a>
            </li>
            <li>
              <a href="/current-sponsors">Current Sponsors</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

hof.propTypes = {};

export default hof;
