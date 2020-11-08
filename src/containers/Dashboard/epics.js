import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { Observable } from "rxjs";

import * as api from "./service";
import * as actions from "./actions";
import * as actionTypes from "./actionTypes";

// albums epic
const getAlbums = (action$) => {
  return action$.pipe(
    ofType(actionTypes.GET_ALBUMS),
    mergeMap((action) => {
      return new Observable(async (observer) => {
        try {
          const { query } = action.params;
          const { data } = await api.getAlbums(action.params, query);
          observer.next(actions.getAlbumsSuccess(data));
        } catch (error) {
          const err = error.message;
          observer.next(actions.getAlbumsFailed(err));
        }
      });
    })
  );
};

export const dashboardEpics = [getAlbums];
