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

class DataTableDrag extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      // valueTextEditor: RichTextEditor.createEmptyValue(),
      showModalCollapsible: false,
      showModalNewLink: false,
      list: [
        { value: 'Column One', draggable: false },
        { value: 'Column Two', draggable: true },
        { value: 'Column Three', draggable: true },
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
                  <label className="cf-text-dimmed">How Many Columns?</label>

                  <div className="cf-form-horizontal">
                    <div className="cf-form-option">
                      <input type="radio" id="option-e" name="display-title" />
                      <label htmlFor="option-e">Two</label>
                    </div>
                    <div className="cf-form-option">
                      <input type="radio" id="option-f" />
                      <label htmlFor="option-f">Three</label>
                    </div>
                    <div className="cf-form-option">
                      <input type="radio" id="option-g" />
                      <label htmlFor="option-g">Four</label>
                    </div>
                  </div>
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
                      filter: '.disabled',
                      onMove: function (evt) {
                        return evt.related.className.indexOf('disabled') === -1;
                      }
                      // group: {
                      //   name: 'shared',
                      //   pull: true,
                      //   put: true,
                      // },
                    }}
                  >
                    {
                      this.state.list.map((item, index) => {
                        let disabled;
                        if (item.draggable === false) {
                          disabled = 'disabled';
                        } else {
                          disabled = 'enabled';
                        }
                        return (
                          <li key={index} className={disabled}>
                            <div className="collapsible-item">
                              <div className="collapsible-left">
                                <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
                                <label htmlFor="option-d">{item.value}</label>
                              </div>
                              {/* <div className="collapsible-right">
                                <Link to="/edit-section">
                                  <button>Edit</button>
                                </Link>
                                <button onClick={this.handleOpenModal}>Delete</button>
                              </div> */}
                            </div>

                            <div className="cf-form-field">
                              <label className="cf-text-dimmed">Column Header Name <span className="cf-field-error">Required</span></label>
                              <input type="text" className="cf-form-input" aria-invalid="true" />
                              <div className="ovHidden">
                                <div className="cf-form-hint fRight">Required less than 256 characters</div>
                              </div>
                            </div>

                            <div className="cf-form-field">
                              <label className="cf-text-dimmed">Is table sortable by this column?</label>

                              <div className="cf-form-horizontal">
                                <div className="cf-form-option">
                                  <input type="radio" id="option-h" name="is-table-sortable" />
                                  <label htmlFor="option-h">Yes</label>
                                </div>
                                <div className="cf-form-option">
                                  <input type="radio" id="option-e" name="is-table-sortable" />
                                  <label htmlFor="option-h">No</label>
                                </div>
                              </div>
                            </div>
                          </li>
                        )
                      })
                    }
                  </Sortable>
                </div>

                <div className="cf-form-field ovHidden">
                  <div className="fRight">
                    <Link to="/">
                      <button className="cf-btn-secondary">Cancel</button>
                    </Link>
                    <Link to="/data-table-row">
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
export default DataTableDrag;
