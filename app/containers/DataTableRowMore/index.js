import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import RichTextEditor from 'react-rte';
import { Link } from 'react-router';
// import { Checkbox, Grid, Modal, Icon } from 'semantic-ui-react';
import ReactModal from 'react-modal';
import Sortable from 'react-sortablejs';
// import { makeSelectPage, makeSelectRepos, makeSelectLoading, makeSelectError } from './selectors';
// import { changeSearch, loadStudioRepos, changeMainNav } from '../App/actions';
// import { makeSelectSearch } from '../App/selectors';
// import { loadRepos } from './actions';

const FontAwesome = require('react-fontawesome');
// const Select = require('react-select');

class DataTableRowMore extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      valueTextEditor: RichTextEditor.createEmptyValue(),
      showModalCollapsible: false,
      showModalNewLink: false,
      showRowOne: false,
      showRowTwo: false,
      list: [
        // { value: 'learn Sortable' },
        // { value: 'use gn-sortable' },
        // { value: 'Enjoy' },
        // { value: 'Collapsible Section' },
        { value: 'Row One', open: false },
        { value: 'Row Two', open: false },
      ],
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModalNewLink = this.handleOpenModalNewLink.bind(this);
    this.handleCloseModalNewLink = this.handleCloseModalNewLink.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleToggleShowRowOne = this.handleToggleShowRowOne.bind(this);
    this.handleToggleShowRowTwo = this.handleToggleShowRowTwo.bind(this);
    this.handleOpenModalCollapsible = this.handleOpenModalCollapsible.bind(this);
    this.handleCloseModalCollapsible = this.handleCloseModalCollapsible.bind(this);
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

  handleToggleShowRowOne() {
    this.setState({ showRowOne: !this.state.showRowOne });
  }

  handleToggleShowRowTwo() {
    this.setState({ showRowTwo: !this.state.showRowTwo });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleOpenModalNewLink() {
    this.setState({ showModalNewLink: true });
  }

  handleCloseModalNewLink() {
    this.setState({ showModalNewLink: false });
  }

  handleOpenModalCollapsible() {
    this.setState({ showModalCollapsible: true });
  }

  handleCloseModalCollapsible() {
    this.setState({ showModalCollapsible: false });
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
                        <button className="cf-btn-secondary" onClick={this.handleCloseModal}>No</button>
                        <Link to="/homepage1">
                          <button className="cf-btn-primary success">Yes</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ReactModal>

                <ReactModal
                  isOpen={this.state.showModalCollapsible}
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
                      You must complete all required fields before saving

                    </div>

                    <div className="cf-form-field ovHidden">
                      <div className="fRight">
                        <button className="cf-btn-secondary" onClick={this.handleCloseModalCollapsible}>No</button>
                        <Link to="/collapsible-section">
                          <button className="cf-btn-primary success">Yes</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ReactModal>

                <ReactModal
                  isOpen={this.state.showModalNewLink}
                  contentLabel="Minimal Modal Example"
                  style={{
                    overlay: {
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    },
                    content: {
                      border: '0',
                      borderRadius: '4px',
                      bottom: 'auto',
                      minHeight: '350px',
                      left: '50%',
                      padding: '20px',
                      position: 'fixed',
                      right: 'auto',
                      top: '50%',
                      transform: 'translate(-50%,-50%)',
                      minWidth: '400px',
                      width: '50%',
                      maxWidth: '400px',
                      backgroundColor: '#fff',
                    },
                  }}
                >
                  <div className="modal-content white">
                    <div className="modal-message">

                      <div className="cf-form-field">
                        <label className="cf-text-dimmed">Link Title <span className="cf-field-error">Required</span></label>
                        <input type="text" value="Where to Go" className="cf-form-input" aria-invalid="true" />
                        <div className="ovHidden">
                          <div className="cf-form-hint fRight">Required less than 256 characters</div>
                        </div>
                      </div>

                      <div className="cf-form-field">
                        <label className="cf-text-dimmed">Link URL <span className="cf-field-error">Required</span></label>
                        <input type="text" value="Where to Go" className="cf-form-input" aria-invalid="true" />
                        <div className="ovHidden">
                          <div className="cf-form-hint fRight">Required less than 256 characters</div>
                        </div>
                      </div>

                    </div>

                    <div className="cf-form-field ovHidden">
                      <div className="fRight">
                        <button className="cf-btn-secondary" onClick={this.handleCloseModalNewLink}>No</button>
                        <button className="cf-btn-primary success" onClick={this.handleCloseModalNewLink}>Yes</button>
                      </div>
                    </div>
                  </div>
                </ReactModal>

                <p className="cf-btn-primary cf-block">New Table Section</p>

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
                      <input type="radio" id="option-d" name="display-title" />
                      <label htmlFor="option-d">Yes</label>
                    </div>
                    <div className="cf-form-option">
                      <input type="radio" id="option-e" name="display-title" />
                      <label htmlFor="option-e">No</label>
                    </div>
                    <div className="cf-form-hint">If section is contained in a collapsible section, this title will be displayed, even if no is checked</div>
                  </div>
                </div>

                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Column Headers? <span className="cf-field-link"><Link to="/data-table">(Edit)</Link></span></label>
                  <span className="row">Name</span>
                  <span className="row">Email</span>
                  <span className="row">Phone</span>
                </div>

                <div className="cf-form-field">
                  <Sortable
                    tag="ul" // Defaults to "div"
                    id="sortable-section"
                    // items={this.state.list}
                    // onChange={(items) => {
                    //   this.setState({ items });
                    //   console.log(`this.state.list: ` + JSON.stringify(this.state.list));
                    // }}
                    options={{
                        animation: 150,
                        // handle: '.drag',
                        // group: {
                        //   name: 'shared',
                        //   pull: true,
                        //   put: true,
                        // },
                    }}
                  >
                    {
                      this.state.list.map((item, index) => {
                        return (
                          <li key={index}>
                            <div className="collapsible-item">
                              <div className="collapsible-left">
                                <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                                <label htmlFor="option-d">{item.value}</label>
                              </div>
                              <div className="collapsible-right">
                                <button onClick={this.handleToggleShowRowOne}>
                                  {this.state.showRowOne ? 'Close' : 'Open'}
                                </button>
                                <button onClick={this.handleOpenModal}>Delete</button>
                              </div>
                            </div>
                            <div className={this.state.showRowOne ? 'show' : 'hide'}>
                              <label className="cf-text-dimmed">Column Headers: <b>Name</b></label>

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
                                  <option defaultValue>Choose a value</option>
                                  <option value="Option 1">Option 1</option>
                                  <option value="Option 2">Option 2</option>
                                  <option value="Option 3">Option 3</option>
                                  <option value="Option 4">Option 4</option>
                                  <option value="Option 5">Option 5</option>
                                </select>
                              </div>

                              <hr />

                              <label className="cf-text-dimmed">Column Headers: <b>Email</b></label>

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
                                  <option defaultValue>Choose a value</option>
                                  <option value="Option 1">Option 1</option>
                                  <option value="Option 2">Option 2</option>
                                  <option value="Option 3">Option 3</option>
                                  <option value="Option 4">Option 4</option>
                                  <option value="Option 5">Option 5</option>
                                </select>
                              </div>

                              <hr />

                              <label className="cf-text-dimmed">Column Headers: <b>Phone</b></label>

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
                                  <option defaultValue>Choose a value</option>
                                  <option value="Option 1">Option 1</option>
                                  <option value="Option 2">Option 2</option>
                                  <option value="Option 3">Option 3</option>
                                  <option value="Option 4">Option 4</option>
                                  <option value="Option 5">Option 5</option>
                                </select>
                              </div>
                            </div>
                          </li>
                        )
                      })
                    }
                  </Sortable>
                </div>

                <div className="cf-form-field">
                  <button className="cf-btn-primary">Add Another Row</button>
                </div>

                <div className="cf-form-field ovHidden">
                  <div className="fRight">
                    <Link to="/">
                      <button className="cf-btn-secondary">Cancel</button>
                    </Link>
                    <Link to="/data-table-row-more">
                      <button className="cf-btn-primary success">Save</button>
                    </Link>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default DataTableRowMore;
