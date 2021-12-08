import { getPageData, login } from "@/services/common.js";
export default {
  namespace: "common",
  state: {
    comWidth: 600,
  },
  reducers: {
    delete(state, { payload: id }) {
      return state.filter((item) => item.id !== id);
    },
    test(state, payload) {
      console.log("test");
      return { ...state, comWidth: 800 };
    },
  },
  effects: {
    *getServerData({ payload, callback }, { call, put }) {
      const response = yield call(getPageData, payload);
      if (callback && typeof callback === "function") {
        callback(response); // 返回结果
      }
    },
    *postLogin({ payload, callback }, { call, put }) {
      const response = yield call(login, payload);
      if (callback && typeof callback === "function") {
        callback(response); // 返回结果
      }
    },
  },
};
