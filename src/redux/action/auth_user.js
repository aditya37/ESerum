import axios from 'axios';
import {
  PROCESS_LOGIN_USER,
  AUTH_USER_PATH,
  SUCCESS_LOGIN_USER,
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
          },
        });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
