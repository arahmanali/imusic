import * as actionTypes from "./actionTypes";

const initialState = {
  loading: false,
  albums: {},
  error: {},
};

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ALBUMS:
      return {
        ...state,
        loading: true,
        albums: {},
      };

    case actionTypes.GET_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        albums: action.result,
      };

    case actionTypes.GET_ALBUMS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}

export default dashboardReducer;
