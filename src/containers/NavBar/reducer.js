// import * as actionTypes from "./actionTypes";

const initialState = {
  loading: false,
  isAuthenticated: false,
  token: null,
  refreshToken: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
