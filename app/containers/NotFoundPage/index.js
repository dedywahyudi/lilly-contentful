/**
* NotFoundPage
*
* This is the page we show when the user visits a url that doesn't have a route
*/

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Grid, Breadcrumb, Input } from 'semantic-ui-react';
import { Link, browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { changeSearch, loadStudioRepos } from '../App/actions';
import { makeSelectSearch } from '../App/selectors';

class NotFound extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.onLoadStudio();
  }

  handleKeyPress(target) {
    if (target.charCode === 13) {
      if (this.props.searchkeyword && this.props.searchkeyword.trim().length > 0) {
        browserHistory.push(`/search/` + this.props.searchkeyword); // eslint-disable-line
      }
    }
  }

  handleSubmit() {
    if (this.props.searchkeyword && this.props.searchkeyword.trim().length > 0) {
      browserHistory.push(`/search/` + this.props.searchkeyword); // eslint-disable-line
    }
  }

  render() {
    return (
      <div id="sub-page">
        <Helmet
          title="Page not found"
          meta={[
            { name: 'description', content: 'Page not found of Lilly Contentful' },
          ]}
        />

        <div id="breadcrumb">

          <Grid>
            <Grid.Column>
              <Breadcrumb>
                <Link to="/">
                  <Breadcrumb.Section>Home</Breadcrumb.Section>
                </Link>
                <Breadcrumb.Divider icon="angle right" size="large" />
                <Breadcrumb.Section active>Page not found</Breadcrumb.Section>
              </Breadcrumb>
            </Grid.Column>
          </Grid>

        </div>

        <div className="wrapper sub-page">
          <div className="page-not-found">
            <h1>Page not found</h1>
            <h2>We&apos;re sorry this happened. We can&apos;t seem to find the page you&apos;re looking for, <br /> perhaps searching can help.</h2>

          </div>
        </div>
      </div>
    );
  }
}

NotFound.propTypes = {
  searchkeyword: PropTypes.string,
  onChangeSearch: PropTypes.func,
  onLoadStudio: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSearch: (evt) => dispatch(changeSearch(evt.target.value)),
    onLoadStudio: () => { dispatch(loadStudioRepos()); },
  };
}

const mapStateToProps = createStructuredSelector({
  searchkeyword: makeSelectSearch(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
