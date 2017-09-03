import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import RichTextEditor from 'react-rte';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
// import { Checkbox, Grid, Modal, Icon } from 'semantic-ui-react';
import ReactModal from 'react-modal';
// import { makeSelectPage, makeSelectRepos, makeSelectLoading, makeSelectError } from './selectors';
// import { changeSearch, loadStudioRepos, changeMainNav } from '../App/actions';
// import { makeSelectSearch } from '../App/selectors';
// import { loadRepos } from './actions';

// const FontAwesome = require('react-fontawesome');
// const Select = require('react-select');

class CollapsibleContent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  // static propTypes = {
  //   onChange: PropTypes.func,
  // };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      // valueTextEditor: RichTextEditor.createEmptyValue(),
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

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

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
                        <button className="cf-btn-secondary" onClick={this.handleCloseModal}>Cancel</button>
                        <button className="cf-btn-primary success" onClick={this.handleCloseModal}>Save</button>
                      </div>
                    </div>
                  </div>
                </ReactModal>

                <form>
                  <p className="cf-btn-primary cf-block">New Collapsible Content Section</p>

                  <div className="cf-form-field">

                    <p>Please select one or more content sections to be added to the collapsible section</p>

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <input type="checkbox" id="option-d" />
                        <label htmlFor="option-d">Overview (Basic Content)</label>
                      </div>
                      {/* <div className="collapsible-right">
                        <Link to="/edit-section">
                          <button>Edit</button>
                        </Link>
                        <button onClick={this.handleOpenModal}>Delete</button>
                      </div> */}
                    </div>

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <input type="checkbox" id="option-d" />
                        <label htmlFor="option-d">Key Related (Link List)</label>
                      </div>
                      {/* <div className="collapsible-right">
                        <Link to="/link-list">
                          <button>Edit</button>
                        </Link>
                        <button onClick={this.handleOpenModal}>Delete</button>
                      </div> */}
                    </div>

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <input type="checkbox" id="option-d" />
                        <label htmlFor="option-d">Contact Information (Data Table)</label>
                      </div>
                      {/* <div className="collapsible-right">
                        <Link to="/edit-section">
                          <button>Edit</button>
                        </Link>
                        <button onClick={this.handleOpenModal}>Delete</button>
                      </div> */}
                    </div>

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <input type="checkbox" id="option-d" />
                        <label htmlFor="option-d">Summary (Basic Content)</label>
                      </div>
                      {/* <div className="collapsible-right">
                        <Link to="/edit-section">
                          <button>Edit</button>
                        </Link>
                        <button onClick={this.handleOpenModal}>Delete</button>
                      </div> */}
                    </div>

                  </div>

                  <div className="cf-form-field ovHidden">
                    <div className="fRight">
                      <Link to="/homepage-indent">
                        <button className="cf-btn-secondary">Cancel</button>
                      </Link>
                      <Link to="/homepage-indent">
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
export default CollapsibleContent;
