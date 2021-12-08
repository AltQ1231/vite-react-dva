/**
 * 基础公共接口
 */
import { get, post } from "./axios.js";

export async function getPageData() {
  return get("/user-list");
}

export async function login(params) {
  console.log(params);
  return post("/login", params);
}

// 获取单个组件配置文件 common.json
export async function getComConfigJSON(params) {
  return request("/cbs/getComPackageJson", {
    method: "POST",
    data: params,
    requestType: "json",
  });
}

// 获取单个类型组件列表
export async function getOneTypeComList(params) {
  return request("/cbs/getOneTypeComList", {
    method: "POST",
    data: params,
    requestType: "json",
  });
}

export async function getUploadBase64File(params) {
  console.log("postBase64", params);
  return request("/postBase64", {
    method: "POST",
    data: params,
    requestType: "json",
  });
}

export async function uploadFieldFiles(data) {
  return request("/uploadFile", {
    method: "POST",
    data,
    timeout: 3 * 1000,
  });
}
