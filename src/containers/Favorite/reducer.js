import * as actionTypes from "./actionTypes";

const initialState = {
  loading: false,
  albums: {},
  error: {},
};

function favAlbumsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_FAV_ALBUM:
      return {
        ...state,
        loading: true,
        albums: state.albums,
      };

    case actionTypes.ADD_FAV_ALBUM_SUCCESS:
      return {
        ...state,
        loading: true,
        albums: action.albums,
      };

    case actionTypes.ADD_FAV_ALBUM_FAILED:
      return {
        ...state,
        loading: true,
        error: action.error,
      };

    case actionTypes.GET_FAV_ALBUMS:
      return {
        ...state,
        loading: true,
        albums: {},
      };

    case actionTypes.GET_FAV_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        albums: state.albums,
      };

    case actionTypes.GET_FAV_ALBUMS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}

export default favAlbumsReducer;
