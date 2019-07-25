import React from "react";
import PropTypes from "prop-types";

const SearchForm = props => {
  return (
    <div className="uk-margin">
      <form className="uk-search uk-search-default uk-width-expand@s">
        <a className="uk-form-icon uk-form-icon-flip" uk-icon="icon: search" />
        <input
          className="uk-search-input"
          type="search"
          placeholder={props.placeholder}
        />
      </form>
    </div>
  );
};

SearchForm.propTypes = {};

export default SearchForm;
