/*
* HomePage
*
* This is the first thing users see of our App, at the '/' route
*/

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link, browserHistory } from 'react-router';
import { Segment, Image, Button } from 'semantic-ui-react';
import { makeSelectPage, makeSelectRepos, makeSelectLoading, makeSelectError } from './selectors';

import { changeSearch, loadStudioRepos, changeMainNav } from '../App/actions';
import { makeSelectSearch } from '../App/selectors';
import { loadRepos } from './actions';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.onSubmitForm();
    this.props.onLoadStudio();
  }

  componentDidMount() {
    this.props.onChangeMainNav('symposium');
    this.props.onChangeSearcDefault('');
  }

  handleKeyPress(target) {
    if (target.charCode === 13) {
      if (this.props.searchkeyword && this.props.searchkeyword.trim().length > 0) {
        browserHistory.push(`/search/` + this.props.searchkeyword); // eslint-disable-line
      }
    }
  }

  handleSubmit() {
    if (this.props.searchkeyword && this.props.searchkeyword.trim().length > 0) {
      browserHistory.push(`/search/` + this.props.searchkeyword); // eslint-disable-line
    }
  }

  render() {
    // const { loading } = this.props;
    // const reposListProps = { loading, error, repos };


    // const StringVideo = String(content);

    // console.log(StringVideo);
    const currentYear = new Date().getFullYear();
    const titleText = 'TreanorHL Symposium ' + currentYear; // eslint-disable-line

    return (
      <Segment>
        <div id="sub-page">
          <Helmet
            title={titleText}
            meta={[
              { name: 'description', content: { titleText } },
            ]}
          />
          <div id="career-banner">
            <div className="symposium-intro">
              <div className="symposium-intro-content">
                <h1>Science Facility Design Symposium</h1>
                <h2>School of Pharmacy, University of Kansas<br />
                  2010 Becker Drive, Lawrence KS 66047
                </h2>
              </div>
              <div className="symposium-intro-bg"></div>
            </div>
            <span className="cover">
              <span
                className="fluid-ratio-resize"
                style={{
                    backgroundImage: 'url(../image-symposium-new.jpg)', // eslint-disable-line
                }}
              />
            </span>
          </div>
          <div className="wrapper sub-page">
            <div id="two-cols">
              <div id="left-col">
                <h1 className="fLeft marginBottom">Changing the Culture of Learning Environments. One Space at a Time.</h1>
                <Link
                  className="fRight"
                  to="/registration"
                  activeClassName="active"
                >
                  <Button
                    className="btn-submit"
                    name="button-submit"
                  >
                    Registration
                  </Button>
                </Link>

                <p className="clearBoth">The TreanorHL Science Facility Design Symposium is an annual half-day event, free and open to anyone in the community. This year our focus is on learning environments, specifically for STEM programs. The agenda includes educational sessions, facility tours, opportunities for networking, and plenty of food and drinks. We believe in sharing information with our clients, consultants, and our peers, and each year we invite national presenters to provide unique insights on trends, challenges, and solutions relative to higher education science facility planning and design.</p>
                <p>
                  Date: <b>Thursday, July 20, 2017</b> <br />
                  Location: <b>University of Kansas, Lawrence, Kansas</b> <br />
                  Address: <b>2010 Becker Drive, Lawrence Kansas 66047</b> <br />
                </p>

                <h2>Agenda</h2>

                <div className="qna">
                  <p className="time">10:30 AM - 12:30 PM</p>
                  <p
                    className="title"
                  >
                    Registration
                  </p>
                </div>
                <div className="qna">
                  <p className="time">11:00 AM</p>
                  <p
                    className="title"
                  >
                    Tour of the School of Pharmacy for those interested.
                  </p>
                </div>
                <div className="qna">
                  <p className="time">12:30 PM</p>
                  <p
                    className="title"
                  >
                    Lunch - Sponsored by <a href="http://www.ambientairtech.com/" target="_blank" >Ambient Air Technologies</a>
                  </p>
                </div>
                <div className="qna">
                  <p className="time">1:30 PM - 2:15 PM</p>
                  <p
                    className="title"
                  >
                    Transformative and Innovative Learning Space Design Will Require a Change in Culture of All Stakeholders.
                  </p>
                  <p
                    className="speaker"
                  >
                    P.K. Imbrie
                  </p>
                  <p className="time">Professor and Head, Department of Engineering Education, University of Cincinnati</p>
                </div>
                <div className="qna">
                  <p className="time">2:15 PM - 2:35 PM</p>
                  <p
                    className="title"
                  >
                    Break
                  </p>
                </div>
                <div className="qna">
                  <p className="time">2:35 PM - 3:20 PM</p>
                  <p
                    className="title"
                  >
                    Re-imagining Learning Space
                  </p>
                  <p
                    className="speaker"
                  >
                    Jon Louis Dorbolo
                  </p>
                  <p className="time">Associate Director, Philosopher, Technology Across the Curriculum, Oregon State University</p>
                  <p
                    className="speaker"
                  >
                    Don DeMello
                  </p>
                  <p className="time">Associate Director, Classroom Technology Services, Oregon State University</p>
                </div>
                <div className="qna">
                  <p className="time">3:20 PM - 3:40 PM</p>
                  <p
                    className="title"
                  >
                    Break
                  </p>
                </div>
                <div className="qna last">
                  <p className="time">3:40 PM - 4:25 PM</p>
                  <p
                    className="title"
                  >
                    Getting the Right People in the Room and Keeping Them There: Lessons Learned from Engaging All Stakeholders in Innovative Learning Spaces Initiatives
                  </p>
                  <p
                    className="speaker"
                  >
                    Jeffrey TF Ashley, PhD
                  </p>
                  <p className="time">Director of the Center for Teaching Innovation and Nexus Learning,
                  Philadelphia University</p>
                </div>

                <p>A tour of the School of Pharmacy will be available in the morning before lunch to anyone interested.
                </p>
                <p>After the last presentation, we will move to TreanorHL’s office in downtown Lawrence for a happy hour and a BBQ dinner. Address: 1040 Vermont, Lawrence, Kansas 66044</p>
                <p>Please indicate on the <Link to="/registration">Registration Form</Link> whether you will attend the tour and/or dinner.</p>

                <p>
                  <img src="../symposium-2017.jpg" alt="" />
                </p>
              </div>
              <div id="right-col" className="symposium">
                <span>
                  <h2><Link to="/presentation-speakers">Speakers</Link></h2>
                  <ul>
                    <li>
                      <Image src="../speaker-1.png" shape="circular" />
                      <div className="user-info">
                        <p className="name">P.K. Imbrie</p>
                        <p className="post">Professor and Head, Department
                        of Engineering Education, University of Cincinnati</p>
                      </div>
                    </li>
                    <li>
                      <Image src="../speaker-2.png" shape="circular" />
                      <div className="user-info">
                        <p className="name">Jon Louis Dorbolo</p>
                        <p className="post">Associate Director, Philosopher,
                        Technology Across the Curriculum, Oregon State University</p>
                      </div>
                    </li>
                    <li>
                      <Image src="../speaker-3.png" shape="circular" />
                      <div className="user-info">
                        <p className="name">Don DeMello</p>
                        <p className="post">Associate Director, Classroom
                        Technology Services, Oregon State University</p>
                      </div>
                    </li>
                    <li>
                      <Image src="../speaker-4.png" shape="circular" />
                      <div className="user-info">
                        <p className="name">Jeffrey TF Ashley, PhD</p>
                        <p className="post">Director of the Center for Teaching
                        Innovation and Nexus Learning, Philadelphia University</p>
                      </div>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Segment>
    );
  }
}

HomePage.propTypes = {
  // loading: PropTypes.bool,
  // repos: PropTypes.oneOfType([
  //   PropTypes.any,
  //   PropTypes.bool,
  // ]),
  searchkeyword: PropTypes.string,
  // onChangeSearch: PropTypes.func,
  onChangeSearcDefault: PropTypes.func,
  onSubmitForm: PropTypes.func,
  onLoadStudio: PropTypes.func,
  onChangeMainNav: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSearch: (evt) => dispatch(changeSearch(evt.target.value)),
    onChangeSearcDefault: (value) => dispatch(changeSearch(value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    onLoadStudio: () => { dispatch(loadStudioRepos()); },
    onChangeMainNav: (value) => dispatch(changeMainNav(value)),
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
