/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectSidebar = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('showSidebar')
);

const makeSelectSearch = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('searchkeyword')
);

const makeSelectDesignStudio = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('designstudio')
);

const makeSelectMainNav = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('mainnav')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['globalData', 'repositories'])
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectMainNav,
  makeSelectSidebar,
  makeSelectSearch,
  makeSelectDesignStudio,
  makeSelectLocationState,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
};
