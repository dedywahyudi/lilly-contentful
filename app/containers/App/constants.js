/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const OPEN_SIDEBAR = 'lilly/App/OPEN_SIDEBAR';
export const CLOSE_SIDEBAR = 'lilly/App/CLOSE_SIDEBAR';
export const CHANGE_SEARCH = 'lilly/App/CHANGE_SEARCH';
export const CHANGE_STUDIO = 'lilly/App/CHANGE_STUDIO';
export const LOAD_STUDIO_REPOS = 'lilly/App/LOAD_REPOS';
export const CHANGE_MAIN_NAV = 'lilly/App/CHANGE_MAIN_NAV';
export const LOAD_STUDIO_REPOS_SUCCESS = 'lilly/App/LOAD_REPOS_SUCCESS';
export const LOAD_STUDIO_REPOS_ERROR = 'lilly/App/LOAD_REPOS_ERROR';
export const DEFAULT_LOCALE = 'en';
