/**
 * Gets the repositories of the user from Github
 */

import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectPagename } from 'containers/HomePage/selectors';
import apiConfig from '../api-config';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select pagename from store
  const pagename = yield select(makeSelectPagename());
  const requestURL = `${apiConfig.baseURL}/api/search/?format=json&text=${pagename}`;

  // console.log(requestURL);
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, pagename));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Watches for LOAD_REPOS actions and calls getRepos when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* getReposWatcher() {
  yield fork(takeLatest, LOAD_REPOS, getRepos);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getReposWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  githubData,
];
