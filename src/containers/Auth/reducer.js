import * as actionTypes from "./actionTypes";

const initialState = {
  isAuthenticated: false,
  loading: false,
  profile: {},
  token: null,
  email: null,
  refreshToken: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: action.token,
        refreshToken: action.refreshToken,
        email: action.email,
      };

    case actionTypes.AUTH_LOGIN_FAILED: {
      return {
        ...state,
        profile: {},
        loading: false,
        isAuthenticated: false,
      };
    }

    case actionTypes.AUTH_LOGOUT_SUCCESS: {
      return {
        ...state,
        token: null,
        refreshToken: null,
        email: null,
        profile: {},
        isAuthenticated: false,
      };
    }

    default:
      return state;
  }
}

export default authReducer;
