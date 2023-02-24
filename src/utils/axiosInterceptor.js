import axios from 'axios';
import {USER_MANAGEMENT_BASE_URL} from '../redux/action/constant';
import AsyncStorage from '@react-native-community/async-storage';
// request header
var header = {};

// init instance for axios...
const AxiosInstance = axios.create({
  headers: header,
});

// ActionRefreshToken....
const ActionRefreshToken = async () => {
  return new Promise(async (resolve, reject) => {
    // get refresh token from storage...
    let refreshToken = await AsyncStorage.getItem('@refresh_token');
    return axios({
      baseURL: USER_MANAGEMENT_BASE_URL,
      url: 'user/token/refresh',
      method: 'POST',
      data: {
        refresh_token: refreshToken,
      },
    })
      .then(resp => {
        console.log('[resp action refresh token]', resp);
        AsyncStorage.setItem('@access_token', resp.data.access_token);
        AsyncStorage.setItem('@refresh_token', resp.data.refresh_token);
        resolve(resp);
      })
      .catch(err => {
        // if refresh token return response 401 trigger event to relogin
        console.log('[resp error action refresh token]', err.response);
        reject(err);
      });
  });
};

// request interceptor...
AxiosInstance.interceptors.request.use(
  async resp => {
    // set auth header every request
    if (resp.url != 'user/' && resp.url != 'user/register') {
      // get access token from login
      let accessToken = await AsyncStorage.getItem('@access_token');
      let device_pair_token = await AsyncStorage.getItem('@device_pair_token');
      if (accessToken != null) {
        resp.headers['Authorization'] = 'Bearer ' + accessToken;
      } else {
        // // get device pair token
        resp.headers['Authorization'] = 'Bearer ' + device_pair_token;
      }
      return resp;
    }
    return resp;
  },
  err => {
    console.log("[Err Request interceptor] ",err)
    return Promise.reject(err);
  },
);
// response interceptor...
AxiosInstance.interceptors.response.use(
  resp => {
    console.log('[response interceptor]', resp);
    // get access token from login...
    if (resp.status == 200 && resp.config.url == 'user/') {
      const {access_token, refresh_token, uuid} = resp.data;
      // create session in local storage...
      AsyncStorage.setItem('@is_login', 'true');
      AsyncStorage.setItem('@access_token', access_token);
      AsyncStorage.setItem('@refresh_token', refresh_token);
      AsyncStorage.setItem('@user_uuid', uuid);
      return resp;
    } else {
      return resp;
    }
  },
  err => {
    console.log('[err response interceptor]', err);
    // will refresh token not in url "user/" (user login)
    if (err.response.status == 401 && err.response.config.url != 'user/') {
      // TRIGGER REFRESH TOKEN...
      return ActionRefreshToken()
        .then(resp => {
          err.config.headers['Authorization'] =
            'Bearer ' + resp.data.access_token;
          return AxiosInstance.request(err.config);
        })
        .catch(err => Promise.reject(err));
    }
    // return error...
    return Promise.reject(err);
  },
);

export default AxiosInstance;
