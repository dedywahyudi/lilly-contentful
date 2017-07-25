import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectSidebar } from 'containers/App/selectors';
import { closeSidebar } from 'containers/App/actions';

class SidebarMobile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // handleItemClick = (name) => this.setState({ activeItem: name })

  // componentDidMount() {
  //   console.log(`this.props.mainnav: ` + this.props.mainnav);
  // }

  render() {
    let MainNav;
    if (this.props.mainnav === 'symposium' || this.props.mainnav === 'registration') {
      MainNav = (
        <Menu.Menu>
          <Menu.Item>
            <IndexLink to="/" activeClassName="active" onClick={this.props.onCloseSidebar}>Home</IndexLink>
          </Menu.Item>
          <Menu.Item>
            <IndexLink to="/symposium" activeClassName="active" onClick={this.props.onCloseSidebar}>Symposium Home</IndexLink>
          </Menu.Item>
          <Menu.Item>
            <Link to="/presentation-speakers" activeClassName="active" onClick={this.props.onCloseSidebar}>Presentations & Speakers</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/additional-information" activeClassName="active" onClick={this.props.onCloseSidebar}>Additional Information</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/registration" activeClassName="active" onClick={this.props.onCloseSidebar}>Registration</Link>
          </Menu.Item>
        </Menu.Menu>
      );
    } else if (this.props.mainnav === 'default') {
      MainNav = (
        <Menu.Menu>
          <Menu.Item >
            <IndexLink to="/" activeClassName="active" onClick={this.props.onCloseSidebar}>Home</IndexLink>
          </Menu.Item>
          <Menu.Item>
            <Link to="/people" activeClassName="active" onClick={this.props.onCloseSidebar}>People</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/design" activeClassName="active" onClick={this.props.onCloseSidebar}>Design</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/thinking" activeClassName="active" onClick={this.props.onCloseSidebar}>Thinking</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/contact" activeClassName="active" onClick={this.props.onCloseSidebar}>Contact</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/careers" activeClassName="active" onClick={this.props.onCloseSidebar}>Careers</Link>
          </Menu.Item>
        </Menu.Menu>
      );
    }
    return (
      <Sidebar as={Menu} animation="push" vertical visible={this.props.showSidebar}>

        <Menu.Item>
          <Menu.Menu>
            <Menu.Item className="clear-both">
              <div className="footer-logo"></div>
              <Icon name="close" link onClick={this.props.onCloseSidebar} />
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>MAIN</Menu.Header>
          {MainNav}
          {/* <Menu.Menu>
            <Menu.Item >
              <IndexLink to="/" activeClassName="active" onClick={this.props.onCloseSidebar}>Home</IndexLink>
            </Menu.Item>
            <Menu.Item>
              <Link to="/people" activeClassName="active" onClick={this.props.onCloseSidebar}>People</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/design" activeClassName="active" onClick={this.props.onCloseSidebar}>Design</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/thinking" activeClassName="active" onClick={this.props.onCloseSidebar}>Thinking</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/contact" activeClassName="active" onClick={this.props.onCloseSidebar}>Contact</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/careers" activeClassName="active" onClick={this.props.onCloseSidebar}>Careers</Link>
            </Menu.Item>
          </Menu.Menu> */}
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>STUDIOS</Menu.Header>

          <Menu.Menu>
            <Menu.Item>
              <Link to="/design/advanced-industries" activeClassName="active" onClick={this.props.onCloseSidebar}>Advanced Industries</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/design/civil-engineering" activeClassName="active" onClick={this.props.onCloseSidebar}>Civil</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/design/education" activeClassName="active" onClick={this.props.onCloseSidebar}>Education</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/design/health" activeClassName="active" onClick={this.props.onCloseSidebar}>Health</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/design/housing-mixed-use" activeClassName="active" onClick={this.props.onCloseSidebar}>Housing/Mixed-Use</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/design/interior-design" activeClassName="active" onClick={this.props.onCloseSidebar}>Interior Design</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/design/justice" activeClassName="active" onClick={this.props.onCloseSidebar}>Justice</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/design/preservation" activeClassName="active" onClick={this.props.onCloseSidebar}>Preservation</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/design/science-technology" activeClassName="active" onClick={this.props.onCloseSidebar}>Science &amp; Technology</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/design/student-life" activeClassName="active" onClick={this.props.onCloseSidebar}>Student Life</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Connect with us</Menu.Header>

          <Menu.Menu>
            <Menu.Item>
              <ul className="sidebar-socials">
                <li>
                  <a href="http://www.facebook.com/treanorhl" target="_blank">
                    <Icon size="big" name="facebook f" className="fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="http://www.twitter.com/treanorhl" target="_blank">
                    <Icon size="big" name="twitter" className="fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/treanor-architects_3" target="_blank">
                    <Icon size="big" name="linkedin" className="fa-linkedin" />
                  </a>
                </li>
                {/* <li>
                  <Icon link size="big" name="google plus" className="fa-google-plus" />
                  </li>
                  <li>
                  <Icon link size="big" name="linkedin" className="fa-linkedin" />
                </li> */}
              </ul>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Sidebar>
    );
  }
}

SidebarMobile.propTypes = {
  showSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
  mainnav: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  showSidebar: makeSelectSidebar(),
  // mainnav: makeSelectMainNav(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCloseSidebar: (evt) => dispatch(closeSidebar(evt.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMobile);
