import React from "react";
import PropTypes from "prop-types";
import Users from "./UsersSnippet";
import Events from "./EventsSnippet";

const DashboardAccordion = props => {
  return (
    <div className="uk-align-center uk-margin-large-top uk-width-2-3@s">
      <ul uk-accordion="multiple: true">
        <li className="uk-open">
          <a
            className="uk-accordion-title uk-card uk-card-default uk-card-body"
            href="#">
            Messages <span className="uk-badge">100</span>
          </a>
          <div className="uk-accordion-content uk-card uk-card-default uk-card-body uk-margin-remove-top">
            <div className="uk-overflow-auto">
              <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
                <thead>
                  <tr>
                    <th className="uk-table-shrink" />

                    <th className="uk-table-expand">Expand + Link</th>
                    <th className="uk-width-small">Truncate</th>
                    <th className="uk-table-shrink uk-text-nowrap">
                      Shrink + Nowrap
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input className="uk-checkbox" type="checkbox" />
                    </td>

                    <td className="uk-table-link">
                      <a className="uk-link-reset" href="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </a>
                    </td>
                    <td className="uk-text-truncate">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </td>
                    <td className="uk-text-nowrap">Lorem ipsum dolor</td>
                  </tr>
                  <tr>
                    <td>
                      <input className="uk-checkbox" type="checkbox" />
                    </td>

                    <td className="uk-table-link">
                      <a className="uk-link-reset" href="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </a>
                    </td>
                    <td className="uk-text-truncate">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </td>
                    <td className="uk-text-nowrap">Lorem ipsum dolor</td>
                  </tr>
                  <tr>
                    <td>
                      <input className="uk-checkbox" type="checkbox" />
                    </td>

                    <td className="uk-table-link">
                      <a className="uk-link-reset" href="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </a>
                    </td>
                    <td className="uk-text-truncate">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </td>
                    <td className="uk-text-nowrap">Lorem ipsum dolor</td>
                  </tr>
                  <tr>
                    <td>
                      <input className="uk-checkbox" type="checkbox" />
                    </td>

                    <td className="uk-table-link">
                      <a className="uk-link-reset" href="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </a>
                    </td>
                    <td className="uk-text-truncate">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </td>
                    <td className="uk-text-nowrap">Lorem ipsum dolor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </li>
        <li>
          <a
            className="uk-accordion-title uk-card uk-card-default uk-card-body"
            href="#">
            Upcoming Events
          </a>
          <div className="uk-accordion-content uk-card uk-card-default uk-card-body uk-margin-remove-top">
            <Events />
          </div>
        </li>
        <li>
          <a
            className="uk-accordion-title uk-card uk-card-default uk-card-body"
            href="#">
            New Members
          </a>
          <div className="uk-accordion-content uk-card uk-card-default uk-card-body uk-margin-remove-top">
            <Users />
          </div>
        </li>
      </ul>
    </div>
  );
};

DashboardAccordion.propTypes = {};

export default DashboardAccordion;
