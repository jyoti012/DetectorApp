import { Axios } from 'axios-observable';

const instance = Axios.create({
  baseURL: `http://172.16.62.14:4001/api`,
});

const config = {
    headers: {
    }
};

Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log(config);
    return config;
    }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


const Api = {
  login: function (data) {
    config.headers['Content-Type'] = 'application/json';
    return instance.post('/login',data,config);
  },
  checkUser: function (data) {
    config.headers['Content-Type'] = 'application/json';
    return instance.post('/checkUser',data,config);
  },
};

export default Api;


// import axios from 'axios';
// import {
//   apiBaseUrl
// } from '@constants';
// import { parseApplicationId, parseRestApiKey} from '../constants/config'
// const instance = axios.create({
//   baseURL: `${apiBaseUrl}`,
// });

// const config = {
//   headers: {
//   }
// };

// const Api = {
//   get: function get(url, token) {
//     config.headers['X-Parse-Application-Id'] = parseApplicationId;
//     config.headers['X-Parse-REST-API-Key'] = parseRestApiKey;
//     config.headers['X-Parse-Session-Token'] = token;
//     config.headers['Content-Type'] = 'application/json';
//     return instance.get(url, config);
//   },
//   post: function post(url, data, token = null) {
//     config.headers['X-Parse-Application-Id'] = parseApplicationId;
//     config.headers['X-Parse-REST-API-Key'] = parseRestApiKey;
//     config.headers['X-Parse-Session-Token'] = token;
//     config.headers['Content-Type'] = 'application/json';
//     return instance.post(url, data, config);
//   },
//   update: function post(url, postData, token) {
//     config.headers['X-Parse-Application-Id'] = parseApplicationId;
//     config.headers['X-Parse-REST-API-Key'] = parseRestApiKey;
//     config.headers['X-Parse-Session-Token'] = token;
//     config.headers['Content-Type'] = 'application/json';
//     return instance.post(url, postData, config);
//   },
//   put: function put(url, postData, token) {
//     config.headers['X-Parse-Application-Id'] = parseApplicationId;
//     config.headers['X-Parse-REST-API-Key'] = parseRestApiKey;
//     config.headers['X-Parse-Session-Token'] = token;
//     config.headers['Content-Type'] = 'application/json';
//     return instance.put(url, postData, config);
//   },
// };

// export default Api;