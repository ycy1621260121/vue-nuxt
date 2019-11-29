import * as types from "./mutationType";
import axios from "../../plugins/axios";

export const getHotFile = ({commit}) => {
   //隐藏下面这段就隐藏了浏览器network下面的接口
   axios.get("/api/getRed")
      .then(res => {
        commit(types.HOT, res.data)
      }).catch(e => {})
}
