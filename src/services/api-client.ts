import axios, { AxiosRequestConfig } from "axios";
interface fetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const AxioInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "260496fa70ce4e50894c2fbbcf157427",
  },
});

class APIclient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig)=> {
    return AxioInstance.get<fetchResponse<T>>(this.endpoint, config).then(
      (res) => res.data
    );
  }
}
export default APIclient