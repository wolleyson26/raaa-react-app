import React, { useEffect } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../actions/post";
import Search from "../components/SearchForm";
import MediaIcons from "../components/MediaIcons";
import Donate from "../components/DonateCard";
import photo from "../imgs/photo7.jpg";

const HOFClasses = ({ post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts);
  return (
    <div className="uk-container">
      <h2>Hall of Fame Classes</h2>

      <div className="uk-grid">
        <div className="uk-width-expand@s">
          <Search placeholder="Search Hall of Famers..." />

          <ul uk-accordion="multiple: true">
            {posts
              .filter(post => post.category === "hof")
              .map(post => (
                <li class="uk-open">
                  <a class="uk-accordion-title" to="/hof/inductees">
                    {post.classyear} Inductees
                  </a>
                  <div class="uk-accordion-content">
                    <article class="uk-comment">
                      <Link to="/hof/inductees">
                        <p>All 2019 inductees</p>
                      </Link>
                      <div
                        class="uk-comment-header uk-grid uk-flex-middle"
                        uk-grid>
                        <div class="uk-width-auto">
                          <img
                            className="uk-comment-avatar uk-border-circle"
                            src={photo}
                            width="80"
                            alt=""
                          />
                        </div>
                        <div class="uk-width-expand">
                          <h4 class="uk-comment-title uk-margin-remove">
                            <a class="uk-link-reset" href="#">
                              Frank McClellan
                            </a>
                          </h4>
                          <ul class="uk-comment-body uk-margin-remove-top uk-padding-remove-left">
                            <p>
                              diam nonumy eirmod tempor invidunt ut labore et
                              dolore magna aliquyam erat, sed diam voluptua. At
                              vero eos et et ea rebum.
                            </p>
                          </ul>
                        </div>
                      </div>
                    </article>
                    <article class="uk-comment">
                      <div
                        class="uk-comment-header uk-grid uk-flex-middle"
                        uk-grid>
                        <div class="uk-width-auto">
                          <img
                            className="uk-comment-avatar uk-border-circle"
                            src={photo}
                            width="80"
                            alt=""
                          />
                        </div>
                        <div class="uk-width-expand">
                          <h4 class="uk-comment-title uk-margin-remove">
                            <a class="uk-link-reset" href="#">
                              John Cain
                            </a>
                          </h4>
                          <ul class="uk-comment-body uk-margin-remove-top uk-padding-remove-left">
                            <p>
                              diam nonumy eirmod tempor invidunt ut labore et
                              dolore magna aliquyam erat, sed diam voluptua. At
                              vero eos et et ea rebum.
                            </p>
                          </ul>
                        </div>
                      </div>
                    </article>
                    <article class="uk-comment">
                      <div
                        class="uk-comment-header uk-grid uk-flex-middle"
                        uk-grid>
                        <div class="uk-width-auto">
                          <img
                            className="uk-comment-avatar uk-border-circle"
                            src="images/avatar.jpg"
                            width="80"
                            alt=""
                          />
                        </div>
                        <div class="uk-width-expand">
                          <h4 class="uk-comment-title uk-margin-remove">
                            <a class="uk-link-reset" href="#">
                              Peter Deal
                            </a>
                          </h4>
                          <ul class="uk-comment-body uk-margin-remove-top uk-padding-remove-left">
                            <p>
                              diam nonumy eirmod tempor invidunt ut labore et
                              dolore magna aliquyam erat, sed diam voluptua. At
                              vero eos et et ea rebum.
                            </p>
                          </ul>
                        </div>
                      </div>
                    </article>
                  </div>
                </li>
              ))}
            <li>
              <a class="uk-accordion-title" href="#">
                2018 Inductees
              </a>
              <div class="uk-accordion-content">
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor reprehenderit.
                </p>
              </div>
            </li>
            <li>
              <a class="uk-accordion-title" href="#">
                2017 Inductees
              </a>
              <div class="uk-accordion-content">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat proident.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="uk-width-1-4@s uk-margin uk-visible@s" />
      </div>
    </div>
  );
};

HOFClasses.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(HOFClasses);
