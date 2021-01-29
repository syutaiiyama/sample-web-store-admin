import { apiClientGet } from "./apiClient.get";
import { apiClientPost } from "./apiClient.post";
import { apiClientPatch } from "./apiClient.patch";
import { apiClientDelete } from "./apiClient.delete";
import { firebaseClient } from "../firebase/firebaseClient";

export const apiClient = {
  auth: firebaseClient,
  get: apiClientGet,
  post: apiClientPost,
  patch: apiClientPatch,
  delete: apiClientDelete,
};
