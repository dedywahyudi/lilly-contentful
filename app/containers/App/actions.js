/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  CHANGE_SEARCH,
  CHANGE_STUDIO,
  CHANGE_MAIN_NAV,
  LOAD_STUDIO_REPOS,
  LOAD_STUDIO_REPOS_SUCCESS,
  LOAD_STUDIO_REPOS_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */

export function openSidebar() {
  return {
    type: OPEN_SIDEBAR,
  };
}

export function closeSidebar() {
  return {
    type: CLOSE_SIDEBAR,
  };
}

export function changeSearch(searchkeyword) {
  return {
    type: CHANGE_SEARCH,
    searchkeyword,
  };
}

export function changeStudio(designstudio) {
  return {
    type: CHANGE_STUDIO,
    designstudio,
  };
}

export function changeMainNav(mainnav) {
  return {
    type: CHANGE_MAIN_NAV,
    mainnav,
  };
}

export function loadStudioRepos() {
  return {
    type: LOAD_STUDIO_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposStudioLoaded(repos) {
  return {
    type: LOAD_STUDIO_REPOS_SUCCESS,
    repos,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoStudioLoadingError(error) {
  return {
    type: LOAD_STUDIO_REPOS_ERROR,
    error,
  };
}
