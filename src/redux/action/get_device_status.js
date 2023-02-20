import AxiosInstance from '../../utils/axiosInterceptor';
import {
  PROCESS_GET_DEVICE_PAIR,
  USER_MANAGEMENT_BASE_URL,
  SUCCESS_GET_DEVICE_PAIR,
  FAILED_GET_DEVICE_PAIR,
} from './constant';

export const GetDevicePair = (uuid) => dispatch => {
  dispatch({type: PROCESS_GET_DEVICE_PAIR});
  AxiosInstance({
    url: 'user/' + uuid + '/device/status',
    method: 'GET',
    baseURL: USER_MANAGEMENT_BASE_URL,
  })
    .then(resp => {
      const {is_paired_device, is_paired_rfid} = resp.data;
      dispatch({
        type: SUCCESS_GET_DEVICE_PAIR,
        payload: {
          is_paired_rfid: is_paired_rfid,
          is_paired_device: is_paired_device,
        },
      });
    })
    .catch(err => {
      const {http_resp_code, description} = err.response.data;
      dispatch({
        type: FAILED_GET_DEVICE_PAIR,
        payload: {
          code: http_resp_code,
          message: description,
        },
      });
    });
};
