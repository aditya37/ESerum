import axios from 'axios';
import {
  REGISTER_PATH,
  PROCESS_REGISTER_USER,
  FAILED_REGISTER_USER,
  SUCCESS_REGISTER_USER,
} from './constant';

export const ActionRegisterUser =
  (username, password, email, user_role) => dispatch => {
    const payload = {
      username: username,
      password: password,
      email: email,
      user_role: user_role,
    };
    dispatch({type: PROCESS_REGISTER_USER});

    axios({
      method: 'POST',
      url: REGISTER_PATH,
      data: JSON.stringify(payload),
    })
      .then(resp => {
        dispatch({
          type: SUCCESS_REGISTER_USER,
          payload: {
            code: 201,
            uuid: resp.data.uuid,
            devicePairToken: resp.data.device_pair_token,
          },
        });
      })
      .catch(err => {
        const {http_resp_code, description} = err.response.data;
        dispatch({
          type: FAILED_REGISTER_USER,
          payload: {
            code: http_resp_code,
            message: description,
          },
        });
      });
  };
