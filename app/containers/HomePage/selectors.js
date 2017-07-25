/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectPage = () => createSelector(
  selectHome,
  (homeState) => homeState.get('pagename')
);

const selectGlobal = (state) => state.get('global');

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentPage')
);

const makeSelectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
);

const makeSelectError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);

const makeSelectRepos = () => createSelector(
  selectHome,
  (homeState) => homeState.getIn(['homeData', 'repositories'])
);

export {
  selectHome,
  makeSelectPage,
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
};
