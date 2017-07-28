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

// Code goes here
const FontAwesome = require('react-fontawesome');
// const Select = require('react-select');

var people = [
        { value: 'Collapsible Section',
          list:
          [
            { value: 'Overview (Basic Content)', selected: false },
            { value: 'Key Related (Link List)', selected: false },
            { value: 'Contact Information (Data Table)', selected: false },
          ],
        },
        { value: 'Summary (Basic Content)' },
      ];

class Organisation extends React.Component {
  render() {
    // loop through the persons array and create a new component for each, passing the current person (id and name) and it's children (person.people) as props

    let nodes = people.map(function(person, index) {
      return (
        <Node node={person} children={person.list} key={index} />
      );
    });

    return (
      <Sortable
        tag="ul" // Defaults to "div"
        id="sortable-section"
        // items={this.state.list}
        // onChange={(items) => {
        //   this.setState({ items });
        //   console.log(`this.state.list: ` + JSON.stringify(this.state.list));
        // }}
        options={{
          // animation: 150,
          // handle: '.drag-three-dots',
          group: {
            name: 'parent',
            put: ['parent'],
            put: ['parent']
          },
        }}
      >
        {nodes}
      </Sortable>
    );
  }
}

class Node extends React.Component {

  render() {

    let childnodes = null;

    // the Node component calls itself if there are children
    if(this.props.children) {
      childnodes = this.props.children.map(function(childnode, index) {
       return (
         <Node node={childnode} children={childnode.people} key={index} />
       );
     });
    }

    // return our list element
    // display children if there are any
    return (
      <li key={this.props.index}>
        <div className="collapsible-item">
          <div className="collapsible-left">
            <button href="#" className="drag"><FontAwesome name="ellipsis-v" /></button>
            <label htmlFor="option-d">{this.props.node.value}</label>
          </div>
          <div className="collapsible-right">
            <Link to="/edit-section">
              <button>Edit</button>
            </Link>
            <button onClick={this.handleOpenModalCollapsible}>Remove</button>
          </div>
        </div>
        { childnodes ?
          <Sortable
            tag="ul" // Defaults to "div"
            // id="sortable-section"
            // items={this.state.list}
            // onChange={(items) => {
            //   this.setState({ items });
            //   console.log(`this.state.list: ` + JSON.stringify(this.state.list));
            // }}
            options={{
              // animation: 150,
              // handle: '.drag-three-dots',
              group: {
                name: 'children',
                put: ['children'],
                pull: ['children']
              },
            }}
          >
            {childnodes}
          </Sortable>
        : null }
      </li>
    );
  }
}

class HomePage1 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      disableParent: false,
      disableChildren: false,
      showModal: false,
      showModalCollapsible: false,
      checked: false,
      sortitems: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
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
        { value: 'Collapsible Section',
          items:
          [
            { value: 'Overview (Basic Content)', selected: false },
            { value: 'Key Related (Link List)', selected: false },
            { value: 'Contact Information (Data Table)', selected: false },
          ],
        },
        { value: 'Summary (Basic Content)',
        items: [ ],
        },
      ],
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModalCollapsible = this.handleOpenModalCollapsible.bind(this);
    this.handleCloseModalCollapsible = this.handleCloseModalCollapsible.bind(this);
    this.onChange = this.onChange.bind(this);
    this.checkIfTrue = this.checkIfTrue.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
    this.setDisableParent = this.setDisableParent.bind(this);
    this.setEnableParent = this.setEnableParent.bind(this);
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

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

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

  setDisableParent() {
    this.setState({ disableParent: false });
    console.log('this.state.disableParent: ' + this.state.disableParent);
  }

  setEnableParent() {
    this.setState({ disableParent: true });
    console.log('this.state.disableParent: ' + this.state.disableParent);
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
    //
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

                  {/* <Organisation /> */}

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
                      data-accepts="parent"
                      id="sortable-section"
                      // items={this.state.list}
                      // onChange={(items) => {
                      //   this.setState({ items });
                      //   console.log(`this.state.list: ` + JSON.stringify(this.state.list));
                      // }}
                      options={{
                        animation: 150,
                        // handle: '.drag',
                        // disabled: this.state.disableParent,
                        group: {
                          name: 'parent',
                          pull: true,
                          put: function(to, from, dragEl) {
                            return to.el.dataset.accepts === dragEl.dataset.type;
                          }
                        },
                        // onMove: function(event) {
                        //   return event.to.dataset.accepts.indexOf(event.dragged.dataset.type) !== -1;
                        // }
                      }}
                    >
                      {
                        this.state.list.map((item, index) => {
                          return (
                            <li key={index} data-type="parent">
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

                              {/* {
                                console.log('item.items.length: ' + item.items.length)
                              } */}

                              {item.items && item.items.length ? (
                                <Sortable
                                  tag="ul" // Defaults to "div"
                                  data-accepts="children"
                                  options={{
                                    animation: 150,
                                    // handle: '.drag',
                                    draggable: ".indent-one",
                                    group: {
                                      name: 'children',
                                      pull: true,
                                      put: function(to, from, dragEl) {
                                        return to.el.dataset.accepts === dragEl.dataset.type;
                                      }
                                    },
                                    // onStart: this.setDisableParent,
                                    // onEnd: this.setEnableParent,
                                    // onMove: function(event) {
                                    //   return event.to.dataset.accepts.indexOf(event.dragged.dataset.type) !== -1;
                                    // }
                                  }}
                                >
                                  {
                                    item.items.map((subitem, index) => {
                                      return (
                                        <li key={index} data-type="children" className="indent-one">
                                          <div className="collapsible-item">
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
                              ) : (
                                null
                              )}

                              {/* <Sortable
                                tag="ul" // Defaults to "div"
                                options={{
                                  // animation: 150,
                                  group: {
                                    name: 'children',
                                    put: ['children'],
                                    pull: true
                                  },
                                }}
                                >
                                {
                                  item.items.map((subitem, index) => {
                                    return (
                                      <li key={index}>
                                        <div className="collapsible-item">
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
                              </Sortable> */}

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
