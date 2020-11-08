import * as actionTypes from "./actionTypes";

/**
 * get albums
 * @param {object} params
 */
export const getAlbums = (params) => ({
  type: actionTypes.GET_ALBUMS,
  params,
});

export const getAlbumsSuccess = (result) => ({
  type: actionTypes.GET_ALBUMS_SUCCESS,
  result,
});

export const getAlbumsFailed = (error) => ({
  type: actionTypes.GET_ALBUMS_FAILED,
  error,
});
