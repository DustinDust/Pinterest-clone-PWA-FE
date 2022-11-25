import axios from "axios";

const accessToken = localStorage.getItem("accessToken");
console.log(accessToken);

export default axios.create({
  baseURL: `${process.env.REACT_APP_REST_ENDPOINT}`,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`
  }
});
