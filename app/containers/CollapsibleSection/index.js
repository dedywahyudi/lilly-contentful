/*
* CollapsibleContent
*
* This is the first thing users see of our App, at the '/' route
*/

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import RichTextEditor from 'react-rte';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
// import { Checkbox, Grid, Modal, Icon } from 'semantic-ui-react';
// import ReactModal from 'react-modal';
// import { makeSelectPage, makeSelectRepos, makeSelectLoading, makeSelectError } from './selectors';
// import { changeSearch, loadStudioRepos, changeMainNav } from '../App/actions';
// import { makeSelectSearch } from '../App/selectors';
// import { loadRepos } from './actions';

// const FontAwesome = require('react-fontawesome');
// const Select = require('react-select');

class CollapsibleContent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    onChange: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      valueTextEditor: RichTextEditor.createEmptyValue(),
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    // this.props.onSubmitForm();
    // this.props.onLoadStudio();
  }

  componentDidMount() {
    // this.props.onChangeSearcDefault('');
  }

  onChange = (valueTextEditor) => {
    this.setState({ valueTextEditor });
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        valueTextEditor.toString('html')
      );
    }
  };

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <div id="sub-page">
        <Helmet
          title="Lilly Contentful"
          meta={[
            { name: 'description', content: 'Lilly Contentful' },
          ]}
        />
        <div className="wrapper sub-page">
          <div id="two-cols">
            <div id="left-col">

              <div className="contentful-box border-blue">
                <form>
                  <p className="cf-btn-primary cf-block">New Collapsible Content Section</p>

                  <div className="cf-form-field">

                    <p>Please select one or more content sections to be added to the collapsible section</p>

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <input type="checkbox" id="option-d" />
                        <label htmlFor="option-d">Overview (Basic Content)</label>
                      </div>
                      <div className="collapsible-right">
                        <button>Delete</button>
                        <button>Edit</button>
                      </div>
                    </div>

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <input type="checkbox" id="option-d" />
                        <label htmlFor="option-d">Key Related (Link List)</label>
                      </div>
                      <div className="collapsible-right">
                        <button>Delete</button>
                        <button>Edit</button>
                      </div>
                    </div>

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <input type="checkbox" id="option-d" />
                        <label htmlFor="option-d">Contact Information (Data Table)</label>
                      </div>
                      <div className="collapsible-right">
                        <button>Delete</button>
                        <button>Edit</button>
                      </div>
                    </div>

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <input type="checkbox" id="option-d" />
                        <label htmlFor="option-d">Summary (Basic List)</label>
                      </div>
                      <div className="collapsible-right">
                        <button>Delete</button>
                        <button>Edit</button>
                      </div>
                    </div>

                  </div>

                  <div className="cf-form-field ovHidden">
                    <div className="fRight">
                      <Link to="/">
                        <button className="cf-btn-secondary">Cancel</button>
                      </Link>
                      <Link to="/">
                        <button className="cf-btn-primary success">Save</button>
                      </Link>
                    </div>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

CollapsibleContent.propTypes = {
  // loading: PropTypes.bool,
  // repos: PropTypes.oneOfType([
  //   PropTypes.any,
  //   PropTypes.bool,
  // ]),
  // searchkeyword: PropTypes.string,
  // onChangeSearch: PropTypes.func,
  // onChangeSearcDefault: PropTypes.func,
  // onSubmitForm: PropTypes.func,
  // onLoadStudio: PropTypes.func,
  // onChangeMainNav: PropTypes.func,
};

// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeSearch: (evt) => dispatch(changeSearch(evt.target.value)),
//     onChangeSearcDefault: (value) => dispatch(changeSearch(value)),
//     onSubmitForm: (evt) => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadRepos());
//     },
//     onLoadStudio: () => { dispatch(loadStudioRepos()); },
//     onChangeMainNav: (value) => dispatch(changeMainNav(value)),
//   };
// }

const mapStateToProps = createStructuredSelector({
  // searchkeyword: makeSelectSearch(),
  // repos: makeSelectRepos(),
  // pagename: makeSelectPage(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(CollapsibleContent);
