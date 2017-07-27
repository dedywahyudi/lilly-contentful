import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import RichTextEditor from 'react-rte';
import { Link, browserHistory } from 'react-router';
// import { Checkbox, Grid, Modal, Icon } from 'semantic-ui-react';
import ReactModal from 'react-modal';
import Sortable from 'react-sortablejs';
// import { makeSelectPage, makeSelectRepos, makeSelectLoading, makeSelectError } from './selectors';
// import { changeSearch, loadStudioRepos, changeMainNav } from '../App/actions';
// import { makeSelectSearch } from '../App/selectors';
// import { loadRepos } from './actions';

const FontAwesome = require('react-fontawesome');
// const Select = require('react-select');

class HomePage1 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showModalCollapsible: false,
      checked: false,
      items:
      [
        { name: 'learn Sortable' },
        { name: 'use gn-sortable' },
        { name: 'Enjoy' },
        { name: 'Nested',
          list: [
            { name: 'N1' },
            { name: 'N2' },
            { name: 'N3' },
          ],
        },
        { name: 'Another Nested',
          list: [
            { name: 'N1.2' },
            { name: 'N2.2' },
            { name: 'N3.3' },
          ],
        },
      ],
      list: [
        // { value: 'learn Sortable' },
        // { value: 'use gn-sortable' },
        // { value: 'Enjoy' },
        { value: 'Collapsible Section',
          list:
          [
            { value: 'Overview (Basic Content)', selected: false },
            { value: 'Key Related (Link List)', selected: false },
            { value: 'Contact Information (Data Table)', selected: false },
          ],
        },
        { value: 'Summary (Basic Content)',
          list:[ ],
        },
      ],
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModalCollapsible = this.handleOpenModalCollapsible.bind(this);
    this.handleCloseModalCollapsible = this.handleCloseModalCollapsible.bind(this);
    this.onChange = this.onChange.bind(this);
    this.checkIfTrue = this.checkIfTrue.bind(this);
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

  onChange() {
    this.setState({ checked: !this.state.checked });
  }

  checkIfTrue() {
    if (this.state.checked === true) {
      browserHistory.push(`/collapsible-section/`); // eslint-disable-line
    }
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
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

  // handleChange = (e, { value }) => this.setState({ value })

  render() {
    // const items = this.state.items.map(val => (<li data-id={val}>{val}</li>));
    // const items =
    //   this.state.items.map((item, index) => {
    //     return (
    //       <li key={index}>
    //         {item.name}
    //         {
    //           item.list.map((subitem, index) => {
    //             return (
    //               <ul>
    //                 <li key={index}>{subitem.name}</li>
    //               </ul>
    //             );
    //           })
    //         }
    //       </li>
    //     );
    //   });
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

              <div className="contentful-box border-grey">

                <div className="cf-form-field">

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
                        <p>Are you sure you want to remove Collapsible section from this page?</p>

                        <p className="smaller">The content within the collapsible section will NOT be deleted</p>

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
                        // handle: '.drag-three-dots',
                        group: {
                          name: 'parent',
                          pull: true,
                          put: true,
                        },
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
                                  <Link to="/edit-section">
                                    <button>Edit</button>
                                  </Link>
                                  <button onClick={this.handleOpenModalCollapsible}>Remove</button>
                                </div>
                              </div>
                              <Sortable
                                tag="ul" // Defaults to "div"
                                options={{
                                  animation: 150,
                                  group: {
                                    name: 'children',
                                    pull: true,
                                    put: true,
                                  },
                                }}
                              >
                                {
                                  item.list.map((subitem, index) => {
                                    return (
                                      <li key={index}>
                                        <div className="collapsible-item indent-one">
                                          <div className="collapsible-left">
                                            <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                                            <label htmlFor="option-d">{subitem.value}</label>
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
                            </li>
                          )
                        })
                      }
                    </Sortable>
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
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default HomePage1;
