import {
  PROCESS_GET_DEVICE_PAIR,
  SUCCESS_GET_DEVICE_PAIR,
  FAILED_GET_DEVICE_PAIR,
  HIDE_ALERT,
} from '../action/constant';
const initState = {
  isLoading: false,
  isSuccess: false,
  is_paired_rfid: false,
  is_paired_device: false,
  device_id: '',
  disableButton: false,
  message: '',
  showAlert: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_GET_DEVICE_PAIR:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    case SUCCESS_GET_DEVICE_PAIR:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        is_paired_rfid: action.payload.is_paired_rfid,
        is_paired_device: action.payload.is_paired_device,
        device_id: action.payload.device_id,
        disableButton: false,
      };
    case FAILED_GET_DEVICE_PAIR: {
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        showAlert: true,
        message: action.payload.message,
      };
    }
    case HIDE_ALERT: {
      return {
        showAlert: false,
        disableButton: true,
      };
    }
    default:
      return state;
  }
};
