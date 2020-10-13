import axios from "axios";
let api = axios.create({
    baseURL: "http://127.0.0.1:8081/v1/"
})
api.defaults.headers.common["Authorization"] = "Bearer"+localStorage.getItem("user-token");
export default api;