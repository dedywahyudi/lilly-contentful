/**
*
* App.react.js
*
* This component is the skeleton around the actual pages, and should only
* contain code that should be seen on all pages. (e.g. navigation bar)
*/

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
// import SidebarMobile from 'components/SidebarMobile';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { Sidebar, Segment } from 'semantic-ui-react';
// import { browserHistory } from 'react-router';
import { makeSelectRepos, makeSelectLoading, makeSelectError, makeSelectSidebar, makeSelectMainNav } from 'containers/App/selectors';
import { closeSidebar } from 'containers/App/actions';

const AppWrapper = styled.div`
  padding: 0;
  margin: 0;
`;

// const location = browserHistory.getCurrentLocation();

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // const { loading, error, repos } = this.props;
    // const reposListProps = {
    //   loading,
    //   error,
    //   repos,
    // };
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s"
          defaultTitle="Lilly Contentful"
          meta={[
            { name: 'description', content: 'Lilly Contentful' },
          ]}
        />
        {/* <Header /> */}
        {React.Children.toArray(this.props.children)}
      </AppWrapper>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  // showSidebar: PropTypes.bool,
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([
  //   PropTypes.object,
  //   PropTypes.bool,
  // ]),
  // repos: PropTypes.oneOfType([
  //   PropTypes.array,
  //   PropTypes.bool,
  // ]),
  // mainnav: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  showSidebar: makeSelectSidebar(),
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  mainnav: makeSelectMainNav(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCloseSidebar: (evt) => dispatch(closeSidebar(evt.target.value)),
  };
}

const AppState = connect(mapStateToProps, mapDispatchToProps)(App);

export default withProgressBar(AppState);
