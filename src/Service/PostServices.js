import axios from "axios";
import { ServiceUtils } from "./";

export default class PermissionService {
  constructor() {
    this.url = ServiceUtils.baseUrl + "posts";
  }

  getAllPosts() {
    return axios.get(this.url);
  }

  getPostById(id) {
    console.log(this.url + id);

    return axios.get(this.url + "/" + id);
  }

  getCommentsByPostId(id) {
    return axios.get(this.url + "/" + id + "/comments");
  }

  updatePost(data) {
    console.log(this.url + data);
    return axios.put(this.url + data);
  }

  deletePostById(id) {
    return axios.get(this.url + id);
  }
}
