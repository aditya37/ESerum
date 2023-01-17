import AsyncStorage from '@react-native-community/async-storage';
import {
  FAILED_LOGIN_USER,
  PROCESS_LOGIN_USER,
  SUCCESS_LOGIN_USER,
  HIDE_ALERT,
} from '../action/constant';

const initState = {
  isLoading: false,
  isSuccess: false,
  showAlert: false,
  message: '',
  accessToken: '',
  refreshToken: '',
  uuid: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_LOGIN_USER:
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      };
    case SUCCESS_LOGIN_USER:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        showAlert: true,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        uuid: action.payload.uuid,
      };

    case FAILED_LOGIN_USER:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        showAlert: true,
        message: action.payload.message,
      };
    case HIDE_ALERT:
      return {
        isLoading: false,
        isSuccess: false,
        showAlert: false,
      };
    default:
      return state;
  }
};
