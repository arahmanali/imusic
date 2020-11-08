/* eslint-disable no-template-curly-in-string */
import { mapValues, template } from "lodash";

import { get } from "../../utils/httpService";

const SERVICE_URLS = mapValues(
  {
    getAlbums: "search?media=music&entity=album&term=${query}",
  },
  template
);

export const getAlbums = (options, query) =>
  get(SERVICE_URLS.getAlbums({ query }), options);
