import * as actionTypes from "./actionTypes";

/**
 * add fav albums
 * @param {object} album
 */
export const addFavAlbum = (album) => ({
  type: actionTypes.ADD_FAV_ALBUM,
  album,
});

export const addFavAlbumSuccess = (albums) => ({
  type: actionTypes.ADD_FAV_ALBUM_SUCCESS,
  albums,
});

export const addFavAlbumFailed = (error) => ({
  type: actionTypes.ADD_FAV_ALBUM_FAILED,
  error,
});

/**
 * get fav albums
 * @param {object} params
 */
export const getFavAlbums = (params) => ({
  type: actionTypes.GET_FAV_ALBUMS,
  params,
});

export const getFavAlbumsSuccess = () => ({
  type: actionTypes.GET_FAV_ALBUMS_SUCCESS,
});

export const getFavAlbumsFailed = (error) => ({
  type: actionTypes.GET_FAV_ALBUMS_FAILED,
  error,
});
