import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import RichTextEditor from 'react-rte';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { RadioGroup, Radio } from 'react-radio-group';
import { Link } from 'react-router';
// import { Checkbox, Grid, Modal, Icon } from 'semantic-ui-react';
// import ReactModal from 'react-modal';
import { makeSelectPage, makeSelectRepos, makeSelectLoading, makeSelectError } from './selectors';
import { changeSearch, loadStudioRepos, changeMainNav } from '../App/actions';
import { makeSelectSearch } from '../App/selectors';
import { loadRepos } from './actions';

// const FontAwesome = require('react-fontawesome');
// const Select = require('react-select');

const FLAVOURS = [
 { label: 'United States', value: 'United States' },
 { label: 'China', value: 'China' },
 { label: 'Japan', value: 'Japan' },
 { label: 'Canada', value: 'Canada' },
 { label: 'Mexico', value: 'Mexico' },
 { label: 'Indonesia', value: 'Indonesia' },
 { label: 'International', value: 'International' },
];


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    onChange: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      valueTextEditor: RichTextEditor.createEmptyValue(),
      selectedValue: '',
      disabled: false,
      options: FLAVOURS,
      value: [],
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    // this.props.onSubmitForm();
    this.props.onLoadStudio();
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

  handleChange(e) {
    this.setState({ selectedValue: e.target.value });
    // this.checkIfRadioGlobal();
    // console.log('this.state.selectedValue:' + this.state.selectedValue);
  }

  handleSelectChange(value) {
  // console.log('You\'ve selected:', value);
    this.setState({ value });
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

  // handleChange = (e, { value }) => this.setState({ value })

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

              {/* <div className="contentful-box border-red">
                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Geography <span className="cf-field-error">Required</span></label>

                  <div className="cf-form-option">
                    <input type="radio" id="option-d" value="global" checked={this.state.selectedValue === 'global'} onChange={this.handleChange} />
                    <label htmlFor="option-d">Global (All Countries)</label>
                  </div>

                  <div className="cf-form-option">
                    <input type="radio" id="option-e" value="country" checked={this.state.selectedValue === 'country'} onChange={this.handleChange} />
                    <label htmlFor="option-e">Selected Country Only</label>
                  </div>

                  <Select
                    multi
                    simpleValue
                    disabled={this.state.disabled}
                    value={this.state.value}
                    placeholder="Choose a Country or Region..." options={this.state.options} onChange={this.handleSelectChange}
                  />
                  <div className="cf-field-error">Required</div>
                </div>
              </div> */}

              {/* <div className="contentful-box border-red">
                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Geography <span className="cf-field-error">Required</span></label>
                  <button className="cf-btn-secondary">Create new entry and link</button>
                  <button className="cf-btn-secondary">Link an existing entry</button>
                  <div className="cf-field-error">Required</div>
                </div>
              </div> */}

              {/* <div className="contentful-box border-grey">
                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Company</label>
                  <Select multi simpleValue disabled={this.state.disabled} value={this.state.value} placeholder="Choose a value" options={this.state.options} onChange={this.handleSelectChange} />
                  <div className="cf-form-hint"><i>Company Target</i></div>
                </div>
              </div> */}

              {/* <div className="contentful-box border-red">
                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Page Title <span className="cf-field-error">Required</span></label>
                  <input type="text" value="" className="cf-form-input" aria-invalid="true" />
                  <div className="ovHidden">
                    <div className="cf-form-hint fLeft">0 characters</div>
                    <div className="cf-form-hint fRight">Required less than 256characters</div>
                  </div>
                </div>
              </div> */}

              {/* <div className="contentful-box border-grey">
                <div className="cf-form-field">
                  <label className="cf-text-dimmed">URL</label>
                  <input type="text" value="untitled-entry-2017-06-05-at-09-26-01" className="cf-form-input" />
                </div>
              </div> */}

              {/* <div className="contentful-box border-grey">
                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Page Header Image</label>
                  <button className="cf-btn-secondary">Create new asset and link</button>
                  <button className="cf-btn-secondary">Link an existing asset</button>
                  <div className="cf-form-hint"><i>If populated will display in header section of page</i></div>
                </div>
              </div> */}

              <div className="contentful-box border-red">
                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Content Model</label>
                  LIST HERE
                  {/* <div className="cf-field-error">Required</div> */}
                </div>
              </div>

              <div className="contentful-box border-grey">
                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Add New Content Section</label>
                  <Link to="/basic-content">
                    <button className="cf-btn-primary">Basic Content</button>
                  </Link>
                  <Link to="/data-table">
                    <button className="cf-btn-primary">Data Table</button>
                  </Link>
                  <Link to="/link-list">
                    <button className="cf-btn-primary">Link List</button>
                  </Link>
                  <Link to="/video">
                    <button className="cf-btn-primary">Video</button>
                  </Link>
                  <Link to="/team-member">
                    <button className="cf-btn-primary">Team Member</button>
                  </Link>
                  <Link to="/local-content">
                    <button className="cf-btn-primary">Local Content</button>
                  </Link>
                </div>
              </div>

              {/* <div className="contentful-box border-blue">
                <form>
                  <p className="cf-btn-primary cf-block">Add New Basic Section</p>

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
                    <RichTextEditor
                      value={this.state.valueTextEditor}
                      onChange={this.onChange}
                      className="contentful-editor"
                    />
                    <div className="cf-form-hint">0 words, 0 characters</div>
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
                      <button className="cf-btn-secondary">Cancel</button>
                      <button className="cf-btn-primary success">Save</button>
                    </div>
                  </div>

                </form>
              </div> */}

              {/* <div className="contentful-box border-grey">

                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Contain one or more content sections within a collapsible section?</label>

                  <div className="cf-form-horizontal">
                    <div className="cf-form-option">
                      <input type="radio" id="option-d" />
                      <label htmlFor="option-d">Yes</label>
                    </div>
                  </div>
                </div>

                <div className="cf-form-field">

                  <div className="collapsible-item">
                    <div className="collapsible-left">
                      <label>Overview (Basic Content)</label>
                    </div>
                    <div className="collapsible-right">
                      <button onClick={this.handleOpenModal}>Delete</button>
                      <Link to="/edit-section">
                        <button>Edit</button>
                      </Link>
                      <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                        style={{
                          overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                          },
                          content: {
                            border: '0',
                            borderRadius: '4px',
                            bottom: 'auto',
                            minHeight: '200px',
                            left: '50%',
                            padding: '20px',
                            position: 'fixed',
                            right: 'auto',
                            top: '50%',
                            transform: 'translate(-50%,-50%)',
                            minWidth: '400px',
                            width: '50%',
                            maxWidth: '400px',
                            backgroundColor: '#DB2828',
                          },
                        }}
                      >
                        <div className="modal-content">
                          <div className="modal-message">
                            Are you sure you want to delete Overview section from this page?
                            <br /> This cannot be undone
                          </div>

                          <div className="cf-form-field ovHidden">
                            <div className="fRight">
                              <button className="cf-btn-secondary" onClick={this.handleCloseModal}>Cancel</button>
                              <button className="cf-btn-primary success" onClick={this.handleCloseModal}>Save</button>
                            </div>
                          </div>
                        </div>
                      </ReactModal>
                    </div>
                  </div>
                </div>

                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Add New Content Section</label>
                  <Link to="/basic-content">
                    <button className="cf-btn-primary">Basic Content</button>
                  </Link>
                  <Link to="/data-table">
                    <button className="cf-btn-primary">Data Table</button>
                  </Link>
                  <Link to="/link-list">
                    <button className="cf-btn-primary">Link List</button>
                  </Link>
                  <Link to="/video">
                    <button className="cf-btn-primary">Video</button>
                  </Link>
                  <Link to="/team-member">
                    <button className="cf-btn-primary">Team Member</button>
                  </Link>
                  <Link to="/local-content">
                    <button className="cf-btn-primary">Local Content</button>
                  </Link>
                </div>
              </div> */}

              {/* <div className="contentful-box border-grey">

                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Contain one or more content sections within a collapsible section?</label>

                  <div className="cf-form-horizontal">
                    <div className="cf-form-option">
                      <input type="radio" id="option-d" />
                      <label htmlFor="option-d">Yes</label>
                    </div>
                  </div>
                </div>

                <div className="cf-form-field">

                  <div className="collapsible-item">
                    <div className="collapsible-left">
                      <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                      <label>Overview (Basic Content)</label>
                    </div>
                    <div className="collapsible-right">
                      <button>Delete</button>
                      <button>Edit</button>
                    </div>
                  </div>

                  <div className="collapsible-item">
                    <div className="collapsible-left">
                      <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                      <label>Key Related (Link List)</label>
                    </div>
                    <div className="collapsible-right">
                      <button>Delete</button>
                      <button>Edit</button>
                    </div>
                  </div>

                  <div className="collapsible-item">
                    <div className="collapsible-left">
                      <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                      <label>Contact Information (Data Table)</label>
                    </div>
                    <div className="collapsible-right">
                      <button>Delete</button>
                      <button>Edit</button>
                    </div>
                  </div>

                  <div className="collapsible-item">
                    <div className="collapsible-left">
                      <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                      <label>Summary (Basic Content)</label>
                    </div>
                    <div className="collapsible-right">
                      <button>Delete</button>
                      <button>Edit</button>
                    </div>
                  </div>

                </div>

                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Add New Content Section</label>
                  <Link to="/basic-content">
                    <button className="cf-btn-primary">Basic Content</button>
                  </Link>
                  <Link to="/data-table">
                    <button className="cf-btn-primary">Data Table</button>
                  </Link>
                  <Link to="/link-list">
                    <button className="cf-btn-primary">Link List</button>
                  </Link>
                  <Link to="/video">
                    <button className="cf-btn-primary">Video</button>
                  </Link>
                  <Link to="/team-member">
                    <button className="cf-btn-primary">Team Member</button>
                  </Link>
                  <Link to="/local-content">
                    <button className="cf-btn-primary">Local Content</button>
                  </Link>
                </div>
              </div> */}

              {/* <div className="contentful-box border-blue">
                <form>
                  <p className="cf-btn-primary cf-block">New Collapsible Content Section</p>

                  <div className="cf-form-field">

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
                        <label htmlFor="option-d">Summary (Basic Content)</label>
                      </div>
                      <div className="collapsible-right">
                        <button>Delete</button>
                        <button>Edit</button>
                      </div>
                    </div>

                  </div>

                  <div className="cf-form-field ovHidden">
                    <div className="fRight">
                      <button className="cf-btn-secondary">Cancel</button>
                      <button className="cf-btn-primary success">Save</button>
                    </div>
                  </div>

                </form>
              </div> */}

              {/* <div className="contentful-box border-grey">

                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Contain one or more content sections within a collapsible section?</label>

                  <div className="cf-form-horizontal">
                    <div className="cf-form-option">
                      <input type="checkbox" id="option-d" />
                      <label htmlFor="option-d">Yes</label>
                    </div>
                  </div>
                </div>

                <div className="cf-form-field">

                  <div className="collapsible-item">
                    <div className="collapsible-left">
                      <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                      <label htmlFor="option-d">Collapsible Section</label>
                    </div>
                    <div className="collapsible-right">
                      <button>Delete</button>
                      <button>Edit</button>
                    </div>
                  </div>

                  <div className="collapsible-item indent-one">
                    <div className="collapsible-left">
                      <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                      <label htmlFor="option-d">Overview (Basic Content)</label>
                    </div>
                    <div className="collapsible-right">
                      <button>Delete</button>
                      <button>Edit</button>
                    </div>
                  </div>

                  <div className="collapsible-item indent-one">
                    <div className="collapsible-left">
                      <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                      <label htmlFor="option-d">Key Related (Link List)</label>
                    </div>
                    <div className="collapsible-right">
                      <button>Delete</button>
                      <button>Edit</button>
                    </div>
                  </div>

                  <div className="collapsible-item indent-one">
                    <div className="collapsible-left">
                      <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                      <label htmlFor="option-d">Contact Information (Data Table)</label>
                    </div>
                    <div className="collapsible-right">
                      <button>Delete</button>
                      <button>Edit</button>
                    </div>
                  </div>

                  <div className="collapsible-item">
                    <div className="collapsible-left">
                      <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                      <label htmlFor="option-d">Summary (Basic Content)</label>
                    </div>
                    <div className="collapsible-right">
                      <button>Delete</button>
                      <button>Edit</button>
                    </div>
                  </div>

                </div>

                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Add New Content Section</label>
                  <button className="cf-btn-primary">Basic Content</button>
                  <button className="cf-btn-primary">Data Table</button>
                  <button className="cf-btn-primary">Link List</button>
                  <button className="cf-btn-primary">Video</button>
                  <button className="cf-btn-primary">Team Member</button>
                  <button className="cf-btn-primary">Local Content</button>
                </div>
              </div> */}

              {/* <div className="contentful-box border-blue">
                <form>
                  <p className="cf-btn-primary cf-block">Edit Summary</p>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Page Title <span className="cf-field-error">Required</span></label>
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
                    <RichTextEditor
                      value={this.state.valueTextEditor}
                      onChange={this.onChange}
                      className="contentful-editor"
                    />
                    <div className="cf-form-hint">0 words, 0 characters</div>
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
                      <button className="cf-btn-secondary">Cancel</button>
                      <button className="cf-btn-primary success">Save</button>
                    </div>
                  </div>

                </form>
              </div> */}

              {/* <div className="contentful-box border-blue">
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
                        <span className="green-dot"><FontAwesome name="circle" /></span>
                        <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                        <label>2017 Company Objective Link</label>
                      </div>
                      <div className="collapsible-right">
                        <button onClick={this.handleOpenModal}>Delete</button>
                        <button>Edit</button>
                      </div>
                    </div>
                    <div className="collapsible-item links">
                      <div className="collapsible-left">
                        <span className="green-dot"><FontAwesome name="circle" /></span>
                        <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                        <label>Adverse Effect & Product Complaint</label>
                      </div>
                      <div className="collapsible-right">
                        <button onClick={this.handleOpenModal}>Delete</button>
                        <button>Edit</button>
                      </div>
                    </div>
                    <div className="collapsible-item links">
                      <div className="collapsible-left">
                        <span className="green-dot"><FontAwesome name="circle" /></span>
                        <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
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
                      <button className="cf-btn-secondary">Cancel</button>
                      <button className="cf-btn-primary success">Save</button>
                    </div>
                  </div>

                </form>
              </div> */}

              {/* <div className="contentful-box border-blue">
                <form>
                  <p className="cf-btn-primary cf-block">Edit Local Content</p>

                  <div className="cf-form-field">

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <label>Japan</label>
                      </div>
                      <div className="collapsible-right">
                        <button>Delete</button>
                        <button>View</button>
                      </div>
                    </div>

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <label htmlFor="option-d">Germany</label>
                      </div>
                      <div className="collapsible-right">
                        <button>Delete</button>
                        <button>View</button>
                      </div>
                    </div>

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <label>Acme Region</label>
                      </div>
                      <div className="collapsible-right">
                        <button>Delete</button>
                        <button>View</button>
                      </div>
                    </div>

                  </div>

                  <div className="cf-form-field">
                    <button className="cf-btn-primary">Add Another Link List Section</button>
                  </div>

                  <div className="cf-form-field ovHidden">
                    <div className="fRight">
                      <button className="cf-btn-secondary">Back</button>
                    </div>
                  </div>

                </form>
              </div> */}

              {/* <div className="contentful-box border-blue">
                <form>
                  <p className="cf-btn-primary cf-block">New Team Member Section</p>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Team Member Name <span className="cf-field-error">Required</span></label>
                    <input type="text" value="" className="cf-form-input" aria-invalid="true" />
                    <div className="ovHidden">
                      <div className="cf-form-hint fRight">Required less than 256 characters</div>
                    </div>
                  </div>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Team Member Job Title <span className="cf-field-error">Required</span></label>
                    <input type="text" value="" className="cf-form-input" aria-invalid="true" />
                    <div className="ovHidden">
                      <div className="cf-form-hint fRight">Required less than 256 characters</div>
                    </div>
                  </div>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Team Member Profile Pic <span className="cf-field-error">Required</span></label>
                    <button className="cf-btn-secondary">Create new entry and link</button>
                    <button className="cf-btn-secondary">Link existing entries</button>
                  </div>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Team Member Profile Link (URL)</label>
                    <input type="text" value="" className="cf-form-input" aria-invalid="true" />
                    <div className="ovHidden">
                      <div className="cf-form-hint fRight">Required less than 256 characters</div>
                    </div>
                  </div>

                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Team Member Bio</label>
                    <RichTextEditor
                      value={this.state.valueTextEditor}
                      onChange={this.onChange}
                      className="contentful-editor"
                    />
                    <div className="cf-form-hint">0 words, 0 characters</div>
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
                      <button className="cf-btn-secondary">Cancel</button>
                      <button className="cf-btn-primary success">Save</button>
                    </div>
                  </div>

                </form>
              </div> */}

              {/* <div className="contentful-box border-blue">
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
                    <label className="cf-text-dimmed">inVision Video Title <span className="cf-field-error">Required</span></label>
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
                      <button className="cf-btn-secondary">Cancel</button>
                      <button className="cf-btn-primary success">Save</button>
                    </div>
                  </div>

                </form>
              </div> */}

              {/* <div className="contentful-box border-grey">
                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Global Quick Link</label>
                  <button className="cf-btn-secondary">Create new entry and link</button>
                  <button className="cf-btn-secondary">Link existing entries</button>
                </div>
              </div> */}

              {/* <div className="contentful-box border-grey">
                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Local Quick Link</label>
                  <button className="cf-btn-secondary">Create new entry and link</button>
                  <button className="cf-btn-secondary">Link existing entries</button>
                  <div className="cf-form-hint"><i>Add links targeted to specific affiliates</i></div>
                </div>
              </div> */}

              {/* <div className="contentful-box border-grey">
                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Call to Action</label>
                  <button className="cf-btn-secondary">Create new entry and link</button>
                  <button className="cf-btn-secondary">Link existing entries</button>
                </div>
              </div> */}

              {/* <div className="contentful-box border-grey">
                <form>
                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Enable User Likes?</label>
                    <div className="cf-form-option">
                      <input type="checkbox" id="user-likes" />
                      <label htmlFor="user-likes">Yes</label>
                    </div>
                  </div>
                </form>
              </div> */}

              {/* <div className="contentful-box border-grey">
                <form>
                  <div className="cf-form-field">
                    <label className="cf-text-dimmed">Enable User Comments?</label>
                    <div className="cf-form-option">
                      <input type="checkbox" id="user-likes" />
                      <label htmlFor="user-likes">Yes</label>
                    </div>
                  </div>
                </form>
              </div> */}

            </div>
            {/* <div id="right-col">
                  <span>
                  <p className="cf-text-dimmed">RIGHT SIDEBAR PLACEHOLDER</p>
                </span>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  app: PropTypes.object,
  setAppClientState: PropTypes.func,
  loading: PropTypes.bool,
  repos: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.bool,
  ]),
  // searchkeyword: PropTypes.string,
  // onChangeSearch: PropTypes.func,
  // onChangeSearcDefault: PropTypes.func,
  // onSubmitForm: PropTypes.func,
  onLoadStudio: PropTypes.func,
  // onChangeMainNav: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    // onChangeSearch: (evt) => dispatch(changeSearch(evt.target.value)),
    // onChangeSearcDefault: (value) => dispatch(changeSearch(value)),
    // onSubmitForm: (evt) => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // },
    onLoadStudio: () => { dispatch(loadStudioRepos()); },
    // onChangeMainNav: (value) => dispatch(changeMainNav(value)),
  };
}

const mapStateToProps = createStructuredSelector({
  searchkeyword: makeSelectSearch(),
  repos: makeSelectRepos(),
  pagename: makeSelectPage(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
