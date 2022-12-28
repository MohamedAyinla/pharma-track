/* eslint-disable no-console */

import axios from 'axios'
import config from './config/config'

const HTTP = axios.create()
// Add a request interceptor
HTTP.interceptors.request.use(
  (request) => {
    // const token  = jwt()
    request.headers = {
			'Content-Type': 'application/json',
			// Authorization: import.meta.env.VITE_TOKEN,
			Authorization: '',
		};
    if (request.url.indexOf('http') === -1) {
      // Do something before request is sent
      request.url = config.BASE_URL + request.url
    }
    return request
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
HTTP.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error.response.status === 401) {
    //   // resetState();
    //   router.push({ name: 'auth' });
    // }
    throw error
  }
)

export default HTTP
