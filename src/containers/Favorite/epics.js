import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { isEmpty } from "lodash";

import * as actions from "./actions";
import * as actionTypes from "./actionTypes";

// fav albums epic
const addFavAlbum = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.ADD_FAV_ALBUM),
    mergeMap((action) => {
      return new Observable(async (observer) => {
        try {
          const prevAlbums = state$.value.favorite.albums;
          let payload = {
            resultCount: 1,
            results: [action.album],
          };
          if (prevAlbums.resultCount) {
            const found = prevAlbums.results.find(
              (d) => d.collectionId === action.album.collectionId
            );
            if (isEmpty(found)) {
              prevAlbums.results.push(action.album);
              payload = {
                resultCount: prevAlbums.resultCount + 1,
                results: prevAlbums.results,
              };
            } else {
              payload = prevAlbums;
            }
          }
          observer.next(actions.addFavAlbumSuccess(payload));
        } catch (error) {
          const err = error.message;
          observer.next(actions.addFavAlbumFailed(err));
        }
      });
    })
  );
};

const getFavAlbums = (action$) => {
  return action$.pipe(
    ofType(actionTypes.GET_FAV_ALBUMS),
    mergeMap((action) => {
      return new Observable(async (observer) => {
        try {
          observer.next(actions.getFavAlbumsSuccess());
        } catch (error) {
          const err = error.message;
          observer.next(actions.getFavAlbumsFailed(err));
        }
      });
    })
  );
};

export const favAlbumsEpics = [addFavAlbum, getFavAlbums];
