/*
* TeamMember
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

class TeamMember extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

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

  // handleKeyPress(target) {
  //   if (target.charCode === 13) {
  //     if (this.props.searchkeyword && this.props.searchkeyword.trim().length > 0) {
  //       browserHistory.push(`/search/` + this.props.searchkeyword); // eslint-disable-line
  //     }
  //   }
  // }
  //
  // handleSubmit() {
  //   if (this.props.searchkeyword && this.props.searchkeyword.trim().length > 0) {
  //     browserHistory.push(`/search/` + this.props.searchkeyword); // eslint-disable-line
  //   }
  // }

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
                  <p className="cf-btn-primary cf-block">Video Section</p>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Video Title <span className="cf-field-error">Required</span></label>
                    <input type="text" value="" className="cf-form-input" aria-invalid="true" />
                    <div className="ovHidden">
                      <div className="cf-form-hint fRight">Required less than 256 characters</div>
                    </div>
                  </div>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Display Title on Page?</label>

                    <div className="cf-form-horizontal">
                      <div className="cf-form-option">
                        <input type="radio" id="option-d" />
                        <label htmlFor="option-d">Yes</label>
                      </div>
                      <div className="cf-form-option">
                        <input type="radio" id="option-e" />
                        <label htmlFor="option-e">No</label>
                      </div>
                      <div className="cf-form-hint">If section is contained in a collapsible section, this title will be displayed, even if no is checked</div>
                    </div>
                  </div>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">inVison Video Title <span className="cf-field-error">Required</span></label>
                    <input type="text" value="" className="cf-form-input" aria-invalid="true" />
                    <div className="cf-form-hint">You will find the inVision video ID at the end of your video URL after the last /. it will look similar to this: 1_841itjtj.</div>
                  </div>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Wrap Text Around Image</label>
                    <select aria-invalid="true" className="cf-form-input">
                      <option selected>Choose a value</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                      <option>Option 5</option>
                    </select>
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

TeamMember.propTypes = {
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
export default connect(mapStateToProps)(TeamMember);
