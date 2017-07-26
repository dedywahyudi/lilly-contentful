import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import RichTextEditor from 'react-rte';
import { Link } from 'react-router';
// import { Checkbox, Grid, Modal, Icon } from 'semantic-ui-react';
// import ReactModal from 'react-modal';
// import { makeSelectPage, makeSelectRepos, makeSelectLoading, makeSelectError } from './selectors';
// import { changeSearch, loadStudioRepos, changeMainNav } from '../App/actions';
// import { makeSelectSearch } from '../App/selectors';
// import { loadRepos } from './actions';

const FontAwesome = require('react-fontawesome');
// const Select = require('react-select');

class LinkList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

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
                  <p className="cf-btn-primary cf-block">Edit Key Related Links</p>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Section Title <span className="cf-field-error">Required</span></label>
                    <input type="text" value="" className="cf-form-input" aria-invalid="true" />
                    <div className="ovHidden">
                      <div className="cf-form-hint fLeft">0 characters</div>
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

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <label>Where to Go (Link List)</label>
                      </div>
                      <div className="collapsible-right">
                        <button onClick={this.handleOpenModal}>Delete</button>
                        <button>Open</button>
                      </div>
                    </div>

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <label>New Link List</label>
                      </div>
                      <div className="collapsible-right">
                        <button onClick={this.handleOpenModal}>Delete</button>
                        <button>Close</button>
                      </div>
                    </div>

                  </div>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">List Title <span className="cf-field-error">Required</span></label>
                    <input type="text" value="Where to Go" className="cf-form-input" aria-invalid="true" />
                    <div className="ovHidden">
                      <div className="cf-form-hint fRight">Required less than 256 characters</div>
                    </div>
                  </div>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Display Block or Image for List Header?</label>

                    <div className="cf-form-horizontal">
                      <div className="cf-form-option">
                        <input type="radio" id="option-d" />
                        <label htmlFor="option-d">Dark Gray Color Block</label>
                      </div>
                      <div className="cf-form-option">
                        <input type="radio" id="option-e" />
                        <label htmlFor="option-e">Image</label>
                      </div>
                    </div>
                  </div>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Add List Header Image?</label>
                    <div className="cf-form-option">
                      <input type="radio" id="user-likes" />
                      <label htmlFor="user-likes">Yes</label>
                    </div>
                  </div>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Include a short Introduction Before the Links?</label>

                    <div className="cf-form-horizontal">
                      <div className="cf-form-option">
                        <input type="radio" id="option-d" />
                        <label htmlFor="option-d">Yes</label>
                      </div>
                      <div className="cf-form-option">
                        <input type="radio" id="option-e" />
                        <label htmlFor="option-e">No</label>
                      </div>
                    </div>
                  </div>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Short Description <span className="cf-field-error">Required</span></label>
                    <input type="text" value="Where to Go" className="cf-form-input" aria-invalid="true" />
                    <div className="ovHidden">
                      <div className="cf-form-hint fRight">Required less than 256 characters</div>
                    </div>
                  </div>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Links <span className="cf-field-error">Required</span></label>
                    <div className="collapsible-item links">
                      <div className="collapsible-left">
                        <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                        <span className="green-dot"><FontAwesome name="circle" /></span>
                        <label>2017 Company Objective Link</label>
                      </div>
                      <div className="collapsible-right">
                        <button onClick={this.handleOpenModal}>Delete</button>
                        <button>Edit</button>
                      </div>
                    </div>
                    <div className="collapsible-item links">
                      <div className="collapsible-left">
                        <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                        <span className="green-dot"><FontAwesome name="circle" /></span>
                        <label>Adverse Effect & Product Complaint</label>
                      </div>
                      <div className="collapsible-right">
                        <button onClick={this.handleOpenModal}>Delete</button>
                        <button>Edit</button>
                      </div>
                    </div>
                    <div className="collapsible-item links">
                      <div className="collapsible-left">
                        <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                        <span className="green-dot"><FontAwesome name="circle" /></span>
                        <label>Ask Expert</label>
                      </div>
                      <div className="collapsible-right">
                        <button onClick={this.handleOpenModal}>Delete</button>
                        <button>Edit</button>
                      </div>
                    </div>
                  </div>

                  <div className="cf-form-field">
                    <button className="cf-btn-secondary">Create new entry and link</button>
                    <button className="cf-btn-secondary">Link existing entries</button>
                  </div>

                  <div className="cf-form-field">
                    <button className="cf-btn-primary">Add Another Link List Section</button>
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

// Wrap the component to inject dispatch and state into it
export default LinkList;
