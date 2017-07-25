/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectPagename = () => createSelector(
  selectHome,
  (homeState) => homeState.get('pagename')
);

const selectGlobal = (state) => state.get('global');

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentPage')
);

export {
  selectHome,
  makeSelectPagename,
  selectGlobal,
  makeSelectCurrentUser,
};
