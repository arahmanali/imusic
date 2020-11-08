import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { Observable } from "rxjs";

import * as actions from "./actions";
import * as actionTypes from "./actionTypes";
import { navigateTo } from "../../utils/navigation";

// login epic
const login = (action$) => {
  return action$.pipe(
    ofType(actionTypes.AUTH_LOGIN),
    mergeMap((action) => {
      return new Observable(async (observer) => {
        try {
          observer.next(
            actions.loginSuccess("1234567890", "0987654321", "admin@admin.com")
          );
          navigateTo("/");
        } catch (error) {
          const err = error.message;
          observer.next(actions.loginFailed(err));
        }
      });
    })
  );
};

// logout epic
const logout = (action$) => {
  return action$.pipe(
    ofType(actionTypes.AUTH_LOGOUT),
    mergeMap(async (action) => {
      return actions.logoutSuccess();
    })
  );
};

export const authEpics = [login, logout];
