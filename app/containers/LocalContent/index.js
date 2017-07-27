import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import RichTextEditor from 'react-rte';
import { Link } from 'react-router';
// import { Checkbox, Grid, Modal, Icon } from 'semantic-ui-react';
import ReactModal from 'react-modal';
// import { makeSelectPage, makeSelectRepos, makeSelectLoading, makeSelectError } from './selectors';
// import { changeSearch, loadStudioRepos, changeMainNav } from '../App/actions';
// import { makeSelectSearch } from '../App/selectors';
// import { loadRepos } from './actions';

// const FontAwesome = require('react-fontawesome');
// const Select = require('react-select');

class LocalContent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

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
                  <p className="cf-btn-primary cf-block">Edit Local Content</p>

                  <div className="cf-form-field">

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <label>Japan</label>
                      </div>
                      <div className="collapsible-right">
                        <button>View</button>
                        <button onClick={this.handleOpenModal}>Delete</button>
                      </div>
                    </div>

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <label htmlFor="option-d">Germany</label>
                      </div>
                      <div className="collapsible-right">
                        <button>View</button>
                        <button onClick={this.handleOpenModal}>Delete</button>
                      </div>
                    </div>

                    <div className="collapsible-item">
                      <div className="collapsible-left">
                        <label>Acme Region</label>
                      </div>
                      <div className="collapsible-right">
                        <button>View</button>
                        <button onClick={this.handleOpenModal}>Delete</button>
                      </div>
                    </div>

                  </div>

                  <div className="cf-form-field">
                    <button className="cf-btn-primary">Add Another Link List Section</button>
                  </div>

                  <div className="cf-form-field ovHidden">
                    <div className="fRight">
                      <Link to="/">
                        <button className="cf-btn-secondary">Back</button>
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

LocalContent.contextTypes = {
  router: PropTypes.object.isRequired,
};

// Wrap the component to inject dispatch and state into it
export default LocalContent;
