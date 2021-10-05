import axios from "axios";
import { ServiceUtils } from "./";

export default class PermissionService {
  constructor() {
    this.url = ServiceUtils.baseUrl + "users";
  }

  getAllUsers() {
    return axios.get(this.url);
  }
  getUserById(id) {
    console.log(this.url + "/" + id);
    return axios.get(this.url + "/" + id);
  }
}
