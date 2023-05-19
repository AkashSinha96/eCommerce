import axios, { AxiosError, AxiosResponse } from "axios";
import { router } from "../router/Routes";

const sleep = () => new Promise(resolve => setTimeout(resolve, 500))

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;