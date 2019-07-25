import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createUser, getUser } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import { createProfile } from "../../actions/profile";

import RegisterWizardFirstPage from "./RegisterWizardFirstPage";
import RegisterWizardSecondPage from "./RegisterWizardSecondPage";
import RegisterWizardThirdPage from "./RegisterWizardThirdPage";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  createNewUser = async formValues => {
    await this.props.getUser(formValues.email);

    if (formValues.email === this.props.user.email) {
      this.props.setAlert(
        "It seem this user is already registered please pick another email address to continue",
        "danger"
      );
    } else {
      this.props.createUser(formValues);
      this.nextPage();
    }
  };

  createNewProfile = (formValues, history) => {
    this.props.createProfile(formValues, this.props.history);
  };

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div className="uk-container uk-margin-large-top">
        <h2 className="uk-text-center uk-margin-medium-bottom">
          Member Registration
        </h2>
        <hr className="uk-divider-icon" />
        {page === 1 && (
          <RegisterWizardFirstPage
            nextPage={this.nextPage}
            onSubmit={this.nextPage}
            createNewUser={this.createNewUser}
          />
        )}
        {page === 2 && <RegisterWizardSecondPage onSubmit={this.nextPage} />}
        {page === 3 && (
          <RegisterWizardThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
            createNewProfile={this.createNewProfile}
          />
        )}
      </div>
    );
  }
}

Register.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(
  mapStateToProps,
  { createUser, getUser, setAlert, createProfile }
)(withRouter(Register));
