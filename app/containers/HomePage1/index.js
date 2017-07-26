import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import RichTextEditor from 'react-rte';
import { Link } from 'react-router';
// import { Checkbox, Grid, Modal, Icon } from 'semantic-ui-react';
import ReactModal from 'react-modal';
// import { makeSelectPage, makeSelectRepos, makeSelectLoading, makeSelectError } from './selectors';
// import { changeSearch, loadStudioRepos, changeMainNav } from '../App/actions';
// import { makeSelectSearch } from '../App/selectors';
// import { loadRepos } from './actions';

const FontAwesome = require('react-fontawesome');
// const Select = require('react-select');

class HomePage1 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    // onChange: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      valueTextEditor: RichTextEditor.createEmptyValue(),
      checked: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.onChange = this.onChange.bind(this);
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
    // console.log(`this.state.checked: ` + this.state.checked);
    if (this.state.checked === false) {
      this.context.router.push('/collapsible-section');
    }
  }

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

              <div className="contentful-box border-grey">

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

                <div className="cf-form-field">
                  <label className="cf-text-dimmed">Contain one or more content sections within a collapsible section?</label>

                  <div className="cf-form-horizontal">
                    <div className="cf-form-option">
                      <input
                        type="checkbox"
                        id="option-d"
                        defaultChecked={this.state.checked}
                        onChange={this.onChange}
                      />
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
                      <Link to="/edit-section">
                        <button>Edit</button>
                      </Link>
                      <button onClick={this.handleOpenModal}>Delete</button>
                    </div>
                  </div>

                  <div className="collapsible-item">
                    <div className="collapsible-left">
                      <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                      <label>Key Related (Link List)</label>
                    </div>
                    <div className="collapsible-right">
                      <Link to="/edit-section">
                        <button>Edit</button>
                      </Link>
                      <button onClick={this.handleOpenModal}>Delete</button>
                    </div>
                  </div>

                  <div className="collapsible-item">
                    <div className="collapsible-left">
                      <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                      <label>Contact Information (Data Table)</label>
                    </div>
                    <div className="collapsible-right">
                      <Link to="/edit-section">
                        <button>Edit</button>
                      </Link>
                      <button onClick={this.handleOpenModal}>Delete</button>
                    </div>
                  </div>

                  <div className="collapsible-item">
                    <div className="collapsible-left">
                      <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                      <label>Summary (Basic Content)</label>
                    </div>
                    <div className="collapsible-right">
                      <Link to="/edit-section">
                        <button>Edit</button>
                      </Link>
                      <button onClick={this.handleOpenModal}>Delete</button>
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
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage1.contextTypes = {
  router: PropTypes.object.isRequired,
};

// Wrap the component to inject dispatch and state into it
export default HomePage1;
