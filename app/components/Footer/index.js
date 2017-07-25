import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { makeSelectMainNav } from 'containers/App/selectors';
import FooterStudio from './FooterStudio';

class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { repos, loading, error } = this.props;
    const reposListProps = { loading, error, repos };
    // console.log('footer repos' + repos);

    let twitterLink;
    if (this.props.mainnav === 'symposium' || this.props.mainnav === 'registration') {
      twitterLink = (
        <li>
          <a href="http://www.twitter.com/TreanorHL_ST" target="_blank">
            <Icon size="big" name="twitter" className="fa-twitter" />
          </a>
        </li>
      );
    } else {
      twitterLink = (
        <li>
          <a href="http://www.twitter.com/treanorhl" target="_blank">
            <Icon size="big" name="twitter" className="fa-twitter" />
          </a>
        </li>
      );
    }

    return (
      <div id="footer">
        <div className="wrapper">

          <div id="footer-left">

            <div className="footer-logo"></div>
            <div className="footer-links">

              <div className="footer-column">
                <h3>Main</h3>
                <ul>
                  <li>
                    <IndexLink
                      to="/"
                    >Home</IndexLink>
                  </li>
                  <li>
                    <Link
                      to="/people"
                    >People</Link>
                  </li>
                  <li>
                    <Link
                      to="/design"
                    >Design</Link>
                  </li>
                  <li>
                    <Link
                      to="/thinking"
                    >Thinking</Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                    >Contact</Link>
                  </li>
                  <li>
                    <Link
                      to="/careers"
                    >Careers</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-column studio">
                <h3>Studios</h3>

                <FooterStudio {...reposListProps} />
              </div>

            </div>
          </div>

          <div id="footer-right">
            <h3>Connect with us</h3>
            <ul>
              <li>
                <a href="http://www.facebook.com/treanorhl" target="_blank">
                  <Icon size="big" name="facebook f" className="fa-facebook" />
                </a>
              </li>
              {twitterLink}
              {/* <li>
                <Link to="#">
                  <Icon size="big" name="google plus" className="fa-google-plus" />
                </Link>
              </li> */}
              <li>
                <a href="https://www.linkedin.com/company/treanor-architects_3" target="_blank">
                  <Icon size="big" name="linkedin" className="fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  error: PropTypes.any,
  repos: PropTypes.any,
  loading: PropTypes.any,
  mainnav: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  mainnav: makeSelectMainNav(),
});

export default connect(mapStateToProps)(Footer);
