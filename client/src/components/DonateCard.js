import React from "react";
import PropTypes from "prop-types";
import Donate from "../imgs/donate.jpg";

const DonateCard = props => {
  return (
    <div class="uk-child-width-expand@s" uk-grid>
      <div>
        <div class="uk-card-primary uk-card-default">
          <div class="uk-card-media-top">
            <img src={Donate} alt="" />
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Supporting our Community</h3>
            <p>We hope you can support our community by donating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

DonateCard.propTypes = {};

export default DonateCard;
