import * as types from "./mutationType";
import axios from "../../plugins/axios";

export const getHotFile = ({commit},params) => {
   //隐藏下面这段就隐藏了浏览器network下面的接口
   axios.get("/api/getRed")
      .then(res => {
        //commit(types.HOT, res.data);
        commit('setHotData', res.data)
      }).catch(e => {})
}
export const getHot = ({commit},params) => {
   //隐藏下面这段就隐藏了浏览器network下面的接口
   axios.get("/api/getRed?id=123")
      .then(res => {
        //commit(types.HOT, res.data);
        commit('setHotData', res.data)
      }).catch(e => {})
}
