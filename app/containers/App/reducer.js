/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  CHANGE_SEARCH,
  CHANGE_STUDIO,
  CHANGE_MAIN_NAV,
  LOAD_STUDIO_REPOS_SUCCESS,
  LOAD_STUDIO_REPOS,
  LOAD_STUDIO_REPOS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  showSidebar: false,
  mainnav: '',
  searchkeyword: '',
  designstudio: '',
  loading: false,
  error: false,
  globalData: {
    repositories: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDEBAR:

      return state
        .set('showSidebar', true);
    case CHANGE_MAIN_NAV:

      return state
        .set('mainnav', action.mainnav);
    case CLOSE_SIDEBAR:

      return state
        .set('showSidebar', false);
    case CHANGE_STUDIO:

      return state
        .set('designstudio', action.designstudio);
    case CHANGE_SEARCH:

      return state
        .set('searchkeyword', action.searchkeyword);
    case LOAD_STUDIO_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['globalData', 'repositories'], false);
    case LOAD_STUDIO_REPOS_SUCCESS:
      return state
        .setIn(['globalData', 'repositories'], action.repos)
        .set('loading', false);
    case LOAD_STUDIO_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:

      return state;
  }
}

export default appReducer;
