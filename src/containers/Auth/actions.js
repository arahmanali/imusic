import * as actionTypes from "./actionTypes";

/**
 * login
 * @param {string} token
 */
export const login = (params) => ({
  type: actionTypes.AUTH_LOGIN,
  params,
});

export const loginSuccess = (token, refreshToken, email) => ({
  type: actionTypes.AUTH_LOGIN_SUCCESS,
  token,
  refreshToken,
  email,
});

export const loginFailed = () => ({
  type: actionTypes.AUTH_LOGIN_FAILED,
});

/**
 * logout
 */
export const logout = () => ({
  type: actionTypes.AUTH_LOGOUT,
});

export const logoutSuccess = () => ({
  type: actionTypes.AUTH_LOGOUT_SUCCESS,
});
