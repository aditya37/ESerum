import axios from 'axios';
import {
  PROCESS_LOGIN_USER,
  AUTH_USER_PATH,
  SUCCESS_LOGIN_USER,
  FAILED_LOGIN_USER,
} from './constant';
export const ActionAuth =
  ({username, password}) =>
  dispatch => {
    dispatch({type: PROCESS_LOGIN_USER});
    const payload = {
      username: username,
      password: password,
    };

    axios({
      url: AUTH_USER_PATH,
      method: 'POST',
      data: JSON.stringify(payload),
    })
      .then(resp => {
        dispatch({
          type: SUCCESS_LOGIN_USER,
          payload: {
            accessToken: resp.data.access_token,
            refreshToken: resp.data.refresh_token,
            uuid: resp.data.uuid,
          },
        });
      })
      .catch(err => {
        console.log(err.response.data);
        const {http_resp_code, description} = err.response.data;
        dispatch({
          type: FAILED_LOGIN_USER,
          payload: {
            code: http_resp_code,
            message: description,
          },
        });
      });
  };
