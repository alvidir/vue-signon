// import { Error } from "./rauth.service";

// const SIGNUP_PATH = /^\/signup$/;
// const LOGIN_PATH = /^\/$|\/login$/; // default
// const RESET_PATH = /^\/reset$/;
// const QUERY_PARAMS_REGEX = /\?\w.*/;

// const SIGNUP_PATH_ROOT = "/signup";
// const LOGIN_PATH_ROOT = "/login";
// const RESET_PATH_ROOT = "/reset";

// const BANNER_TITLES: { [key: string]: string } = {
//   [SIGNUP_PATH_ROOT]: "Sign up on Alvidir",
//   [LOGIN_PATH_ROOT]: "Log in Alvidir",
//   [RESET_PATH_ROOT]: "Recover account",
// };

// const SUBMIT_TITLES: { [key: string]: string } = {
//   [SIGNUP_PATH_ROOT]: "Sign up",
//   [LOGIN_PATH_ROOT]: "Log in",
//   [RESET_PATH_ROOT]: "Reset",
// };

// const queryParams = (window.location.href.match(QUERY_PARAMS_REGEX) ?? [""])[0];

// const OPTIONS_PROPS: { [key: string]: unknown } = {
//   [SIGNUP_PATH_ROOT]: {
//     secondary: "Already have an account? Log in!",
//     secondaryHref: `${LOGIN_PATH_ROOT}${queryParams}`,
//   },

//   [LOGIN_PATH_ROOT]: {
//     primary: BANNER_TITLES[SIGNUP_PATH_ROOT],
//     primaryHref: `${SIGNUP_PATH_ROOT}${queryParams}`,
//     secondary: "Forgot password?",
//     secondaryHref: `${RESET_PATH_ROOT}${queryParams}`,
//   },

//   [RESET_PATH_ROOT]: {
//     secondary: "Return to the log in page",
//     secondaryHref: `${LOGIN_PATH_ROOT}${queryParams}`,
//   },
// };

// export {
//   SIGNUP_PATH,
//   LOGIN_PATH,
//   RESET_PATH,
//   QUERY_PARAMS_REGEX,
//   SIGNUP_PATH_ROOT,
//   LOGIN_PATH_ROOT,
//   RESET_PATH_ROOT,
//   BANNER_TITLES,
//   SUBMIT_TITLES,
//   queryParams,
//   OPTIONS_PROPS,
//   WARNING_PROPS,
//   WarningProp,
// };
