import * as axios from "axios";
import storage from "redux-persist/lib/storage";

import { logout } from "../containers/Auth/actions";
import storeObj from "../store";

let baseURL = "";

if (process.env.REACT_APP_BASE_URL) {
  baseURL = process.env.REACT_APP_BASE_URL;
}

// axios instance
const instance = axios.create({
  baseURL,
  timeout: 60000,
});

// request interceptor
instance.interceptors.request.use(
  async (config) => {
    let root = await storage.getItem("persist:root");
    root = JSON.parse(root);
    let token = JSON.parse(root.auth).token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const err = error.response.data ? error.response.data : error;
    if (error.response.status === 401) {
      storeObj.store.dispatch(logout());
    }
    return Promise.reject(err);
  }
);

/**
 *
 *
 * @param {string, string, Object, Object} {
 *   method,
 *   url,
 *   data = {},
 *   config = { responseType: 'json' }
 * }
 * @returns promise
 */
const request = async ({
  method,
  url,
  data = {},
  config = { responseType: "json" },
}) => {
  let promise = null;
  if (method === "post" || method === "put" || method === "patch") {
    promise = instance[method](url, data, config);
  } else {
    promise = instance[method](url, config);
  }
  try {
    const response = await promise;
    return {
      data: response.data,
      status: response.status,
    };
  } catch (err) {
    throw err;
  }
};

export const get = (url, params) => request({ method: "get", url, ...params });
export const post = (url, data, params) =>
  request({ method: "post", url, data, ...params });
export const put = (url, data, params) =>
  request({ method: "put", url, data, ...params });
export const del = (url) => request({ method: "delete", url });
