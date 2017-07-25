/**
 * Gets the repositories of the user from Github
 */

import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { LOAD_STUDIO_REPOS } from '../App/constants';
import { reposStudioLoaded, repoStudioLoadingError } from '../App/actions';

import apiConfig from '../api-config';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select pagename from store
  const requestURL = `${apiConfig.baseURL}/api/menu?format=json`;

  // console.log(requestURL);

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposStudioLoaded(repos));
  } catch (err) {
    yield put(repoStudioLoadingError(err));
  }
}

/**
 * Watches for LOAD_REPOS actions and calls getRepos when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* getReposWatcher() {
  yield fork(takeLatest, LOAD_STUDIO_REPOS, getRepos);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* homeData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getReposWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  homeData,
];
