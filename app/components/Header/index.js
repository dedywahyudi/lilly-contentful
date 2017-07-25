import React from 'react';
import PropTypes from 'prop-types';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { Button } from 'semantic-ui-react';
import { makeSelectSidebar, makeSelectMainNav } from 'containers/App/selectors';
import { openSidebar } from 'containers/App/actions';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // componentDidMount() {
  //   console.log('this.props.location.pathname: ' + this.props.location.pathname);
  // }
  // componentWillReceiveProps() {
  //   console.log('this.props.location.pathname: ' + JSON.stringify(this.props.location));
  // }
  render() {
    return (
      <div id="header" className={this.props.showSidebar ? 'active' : 'hidden'}>
        <div className="wrapper">
          {/* <button name="content" className="menu-mobile" onClick={this.props.onOpenSidebar} >&nbsp;</button> */}
          <IndexLink
            to="/"
            className="header-placeholder"
          >
            HEADER PLACEHOLDER
          </IndexLink>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  showSidebar: PropTypes.bool,
  // onOpenSidebar: PropTypes.func,
  // mainnav: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  showSidebar: makeSelectSidebar(),
  mainnav: makeSelectMainNav(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onOpenSidebar: (evt) => dispatch(openSidebar(evt.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
