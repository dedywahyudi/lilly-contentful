// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/actions'),
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage/sagastudio'),
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([actions, reducer, sagas, sagastudio, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          injectSagas(sagastudio.default);
          renderRoute(component);
          store.dispatch(actions.loadRepos(nextState.params.slug));
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/basic-content',
      name: 'BasicContent',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage/sagastudio'),
          import('containers/BasicContent'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, sagastudio, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          injectSagas(sagastudio.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/homepage1',
      name: 'HomePage1',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage/sagastudio'),
          import('containers/HomePage1'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, sagastudio, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          injectSagas(sagastudio.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/homepage-indent',
      name: 'HomePageIndent',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage/sagastudio'),
          import('containers/HomePageIndent'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, sagastudio, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          injectSagas(sagastudio.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/collapsible-section',
      name: 'CollapsibleSection',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage/sagastudio'),
          import('containers/CollapsibleSection'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, sagastudio, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          injectSagas(sagastudio.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/edit-section',
      name: 'EditSection',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage/sagastudio'),
          import('containers/EditSection'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, sagastudio, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          injectSagas(sagastudio.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/data-table',
      name: 'DataTable',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage/sagastudio'),
          import('containers/DataTable'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, sagastudio, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          injectSagas(sagastudio.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/data-table-drag',
      name: 'DataTableDrag',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage/sagastudio'),
          import('containers/DataTableDrag'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, sagastudio, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          injectSagas(sagastudio.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/data-table-row',
      name: 'DataTableRow',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage/sagastudio'),
          import('containers/DataTableDrag'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, sagastudio, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          injectSagas(sagastudio.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/data-table-row-more',
      name: 'DataTableRowMore',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage/sagastudio'),
          import('containers/DataTableDrag'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, sagastudio, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          injectSagas(sagastudio.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/link-list',
      name: 'LinkList',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage/sagastudio'),
          import('containers/LinkList'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, sagastudio, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          injectSagas(sagastudio.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/video',
      name: 'Video',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage/sagastudio'),
          import('containers/Video'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, sagastudio, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          injectSagas(sagastudio.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/team-member',
      name: 'TeamMember',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage/sagastudio'),
          import('containers/TeamMember'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, sagastudio, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          injectSagas(sagastudio.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/local-content',
      name: 'LocalContent',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage/sagastudio'),
          import('containers/LocalContent'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, sagastudio, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          injectSagas(sagastudio.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage/sagastudio'),
          import('containers/NotFoundPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, sagastudio, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          injectSagas(sagastudio.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
  ];
}
