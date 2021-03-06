import axios from "axios";

const url = "https://mydream1.herokuapp.com/api";
const instance = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: {},
});
export const request = (params: any, allowStatus: number[] = [200]) =>
  instance(params).catch((e) => {});
export const setBearerToken = (token: string) => {
  instance.defaults.headers["x-access-token"] = `${token}`;
  localStorage.setItem("token", token);
};
function restoreToken() {
  const token = localStorage.getItem("token");
  if (token) {
    setBearerToken(token);
  }
}
restoreToken();
