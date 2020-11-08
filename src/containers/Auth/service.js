/* eslint-disable no-template-curly-in-string */
import { mapValues, template } from "lodash";

import { post } from "../../utils/httpService";

const SERVICE_URLS = mapValues(
  {
    login: "auth/v1/login/",
  },
  template
);

export const login = (payload) => post(SERVICE_URLS.login(), payload);
