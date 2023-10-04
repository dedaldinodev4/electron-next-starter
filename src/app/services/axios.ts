import axios from 'axios'

const GITHUB_API = 'https://api.github.com/'

export const getAPIClient = (ctx?: any) => {

  const api = axios.create({
    baseURL: `${GITHUB_API}`
  });

  api.interceptors.request.use(config => {
    return config;
  });

  return api;
}