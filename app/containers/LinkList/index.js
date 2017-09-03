import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import RichTextEditor from 'react-rte';
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

class LinkList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      // valueTextEditor: RichTextEditor.createEmptyValue(),
      // showModal: false,
      showModalCollapsible: false,
      showModalNewLink: false,
      list: [
        // { value: 'learn Sortable' },
        // { value: 'use gn-sortable' },
        // { value: 'Enjoy' },
        // { value: 'Collapsible Section' },
        { value: '2017 Company Objective Link' },
        { value: 'Adverse Effect & Product Complaint', selected: false },
        { value: 'Ask Expert', selected: false },
      ],
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModalNewLink = this.handleOpenModalNewLink.bind(this);
    this.handleCloseModalNewLink = this.handleCloseModalNewLink.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

  // handleOpenModal() {
  //   this.setState({ showModal: true });
  // }
  //
  // handleCloseModal() {
  //   this.setState({ showModal: false });
  // }

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
                      <button>Open</button>
                      <button onClick={this.handleOpenModal}>Delete</button>

                    </div>
                  </div>

                  <div className="collapsible-item">
                    <div className="collapsible-left">
                      <label>New Link List</label>
                    </div>
                    <div className="collapsible-right">
                      <button>Close</button>
                      <button onClick={this.handleOpenModal}>Delete</button>
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
                  <label className="cf-text-dimmed">Choose your header background?</label>

                  <div className="cf-form-horizontal">
                    <div className="cf-form-option">
                      <input type="radio" id="option-d" />
                      <label htmlFor="option-d">Light Gray</label>
                    </div>
                    <div className="cf-form-option">
                      <input type="radio" id="option-f" />
                      <label htmlFor="option-f">Dark Gray</label>
                    </div>
                    <div className="cf-form-option">
                      <input type="radio" id="option-e" />
                      <label htmlFor="option-e">Image</label>
                    </div>
                  </div>
                </div>

                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Add List Header Image?</label>
                  <div className="cf-form-field">
                    <button className="cf-btn-secondary">Create new entry and link</button>
                    <button className="cf-btn-secondary">Link existing entries</button>
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
                  <label className="cf-text-dimmed">Short Description</label>
                  <input type="text" value="Short Description" className="cf-form-input" />
                  <div className="ovHidden">
                    <div className="cf-form-hint fRight">Required less than 256 characters</div>
                  </div>
                </div>

                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Links <span className="cf-field-error">Required</span></label>

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
                                  <span className="green-dot"><FontAwesome name="circle" /></span>
                                  <label htmlFor="option-d">{item.value}</label>
                                </div>
                                <div className="collapsible-right">
                                  <Link to="/edit-section">
                                    <button>Edit</button>
                                  </Link>
                                  <button onClick={this.handleOpenModal}>Delete</button>
                                </div>
                              </div>
                            </li>
                          )
                        })
                      }
                    </Sortable>
                  </div>

                  {/* <div className="collapsible-item links">
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
                  </div> */}
                </div>

                <div className="cf-form-field">
                  <button className="cf-btn-secondary" onClick={this.handleOpenModalNewLink}>Create new entry and link</button>
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
                    <button className="cf-btn-primary success" onClick={this.handleOpenModalCollapsible}>Save</button>
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
export default LinkList;
