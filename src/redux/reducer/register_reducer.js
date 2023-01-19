import {
  PROCESS_REGISTER_USER,
  FAILED_REGISTER_USER,
  HIDE_ALERT,
  SUCCESS_REGISTER_USER,
} from '../action/constant';

const initState = {
  isLoading: false,
  isSuccess: false,
  showAlert: false,
  respCode: 0,
  message: '',
  uuid: '',
  devicePairToken: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_REGISTER_USER:
      return {
        ...state,
        message: 'processing register',
        isLoading: true,
      };
    case FAILED_REGISTER_USER:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        showAlert: true,
        message: action.payload.message,
        respCode: action.payload.code,
      };
    case HIDE_ALERT:
      return {
        ...state,
        showAlert: false,
      };
    case SUCCESS_REGISTER_USER:
      return {
        ...state,
        showAlert: true,
        isLoading: false,
        isSuccess: true,
        respCode: action.payload.code,
        message: 'success register user',
        uuid: action.payload.uuid,
        devicePairToken: action.payload.devicePairToken,
      };
    default:
      return state;
  }
};
