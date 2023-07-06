import { APIClient } from "../api_helper";
import axios from "axios";

const api = new APIClient();
const user = sessionStorage.getItem("authUser");

export const getLoggedInUser = () => {
  const user = sessionStorage.getItem("authUser");
  if (user) return JSON.parse(user);
  return null;
};

export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

const url = `${process.env.REACT_APP_API_URL}/api/permission`;

export const getPermissionByRole = (role) =>
  api.get(`${url}/getByRole?role=${role}`);
export const createPermission = (data) => api.create(`${url}`, data);
export const deletePermission = (id) => api.delete(`${url}/${id}`);
export const editPermission = (id, data) => api.update(`${url}/${id}`, data);
