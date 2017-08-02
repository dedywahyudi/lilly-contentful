/*
 * HomeReducer
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
  CHANGE_USERNAME,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  pagename: '',
  loading: false,
  error: false,
  currentPage: false,
  homeData: {
    repositories: false,
  },
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state
        .set('pagename', action.name);
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['homeData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['homeData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentPage', action.pagename);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:

      return state;
  }
}

export default homeReducer;
